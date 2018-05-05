"""Define a Deep model for classification on structured data."""

from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

import multiprocessing
import six
import tensorflow as tf

# Define the format of input data including unused columns
CSV_COLUMNS = [
    'mts', 'open', 'close', 'high', 'low', 'volume', 'percentChange',
    'strategy'
]

CSV_COLUMN_DEFAULTS = [[0.0], [0.0], [0.0], [0.0], [0.0], [0.0], [0.0], ['']]

LABEL_COLUMN = 'strategy'

LABELS = ['LONG', 'SHORT']

INPUT_COLUMNS = [
    tf.feature_column.numeric_column('volume'),
    tf.feature_column.numeric_column('percentChange')
]

UNUSED_COLUMNS = set(CSV_COLUMNS) - {col.name for col in INPUT_COLUMNS} - \
    {LABEL_COLUMN}


def build_estimator(config, embedding_size=8, hidden_units=None):
    (volume, percentChange) = INPUT_COLUMNS

    deep_columns = [volume, percentChange]

    return tf.estimator.DNNClassifier(
        hidden_units=[100, 75, 50, 25],
        feature_columns=deep_columns,
        n_classes=2,
        config=config,
        optimizer=tf.train.AdamOptimizer(learning_rate=0.001))


def parse_label_column(label_string_tensor):
    # Build a Hash Table inside the graph
    table = tf.contrib.lookup.index_table_from_tensor(tf.constant(LABELS))

    # Use the hash table to convert string labels to ints and one-hot encode
    return table.lookup(label_string_tensor)


# ************************************************************************
# YOU NEED NOT MODIFY ANYTHING BELOW HERE TO ADAPT THIS MODEL TO YOUR DATA
# ************************************************************************


def csv_serving_input_fn():
    """Build the serving inputs."""
    csv_row = tf.placeholder(shape=[None], dtype=tf.string)
    features = parse_csv(csv_row)
    features.pop(LABEL_COLUMN)
    return tf.estimator.export.ServingInputReceiver(features,
                                                    {'csv_row': csv_row})


def example_serving_input_fn():
    """Build the serving inputs."""
    example_bytestring = tf.placeholder(
        shape=[None],
        dtype=tf.string,
    )
    feature_scalars = tf.parse_example(
        example_bytestring,
        tf.feature_column.make_parse_example_spec(INPUT_COLUMNS))
    return tf.estimator.export.ServingInputReceiver(
        features, {'example_proto': example_bytestring})


# [START serving-function]
def json_serving_input_fn():
    """Build the serving inputs."""
    inputs = {}
    for feat in INPUT_COLUMNS:
        inputs[feat.name] = tf.placeholder(shape=[None], dtype=feat.dtype)

    return tf.estimator.export.ServingInputReceiver(inputs, inputs)


# [END serving-function]

SERVING_FUNCTIONS = {
    'JSON': json_serving_input_fn,
    'EXAMPLE': example_serving_input_fn,
    'CSV': csv_serving_input_fn
}


def parse_csv(rows_string_tensor):
    """Takes the string input tensor and returns a dict of rank-2 tensors."""

    # Takes a rank-1 tensor and converts it into rank-2 tensor
    # Example if the data is ['csv,line,1', 'csv,line,2', ..] to
    # [['csv,line,1'], ['csv,line,2']] which after parsing will result in a
    # tuple of tensors: [['csv'], ['csv']], [['line'], ['line']], [[1], [2]]
    row_columns = tf.expand_dims(rows_string_tensor, -1)
    columns = tf.decode_csv(row_columns, record_defaults=CSV_COLUMN_DEFAULTS)
    features = dict(zip(CSV_COLUMNS, columns))

    # Remove unused columns
    for col in UNUSED_COLUMNS:
        features.pop(col)
    return features


def input_fn(filenames,
             num_epochs=None,
             shuffle=True,
             skip_header_lines=0,
             batch_size=200):
    filename_dataset = tf.data.Dataset.from_tensor_slices(filenames)
    if shuffle:
        # Process the files in a random order.
        filename_dataset = filename_dataset.shuffle(len(filenames))

    # For each filename, parse it into one element per line, and skip the header
    # if necessary.
    dataset = filename_dataset.flat_map(
        lambda filename: tf.data.TextLineDataset(filename).skip(skip_header_lines)
    )

    dataset = dataset.map(parse_csv)
    if shuffle:
        dataset = dataset.shuffle(buffer_size=batch_size * 10)
    dataset = dataset.repeat(num_epochs)
    dataset = dataset.batch(batch_size)
    iterator = dataset.make_one_shot_iterator()
    features = iterator.get_next()
    return features, parse_label_column(features.pop(LABEL_COLUMN))
