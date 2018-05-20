import pandas as pd
import tensorflowjs as tfjs
import keras
from keras.layers import Dense, Dropout, Flatten
from keras.models import Sequential
from keras.wrappers.scikit_learn import KerasClassifier
from sklearn.model_selection import train_test_split, GridSearchCV

#can be run with tensorboard --logdir=./model/logs
keras.callbacks.TensorBoard(
    log_dir='./logs',
    histogram_freq=0,
    batch_size=32,
    write_graph=True,
    write_grads=False,
    write_images=False,
    embeddings_freq=0,
    embeddings_layer_names=None,
    embeddings_metadata=None)

#format data and separate it into train v test
df = pd.read_csv("./data/candles.csv")

X = df[[
    "volume", "adx", "cci", "rocr", "hikkake", "harami", "closingMarubozu",
    "onNeck", "longLineCandle", "hikkakeModified", "apo", "cmo", "adx", "cvi",
    "plus_dm", "minus_dm", "plus_di", "minus_di", "dpo", "kvo", "fosc",
    "fisher", "fisher_signal", "dx", "linregslope", "macd", "macd_signal",
    "macd_histogram", "mfi", "mom", "obv", "ppo", "pvi", "rsi", "stoch_k",
    "stoch_d", "atr", "trix", "ultosc", "vosc", "willr", "cmo", "cci", "adosc",
    "adxr", "ao", "aroonosc"
]].values
y = df["strategyCode"].values
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33)


def create_model(optimizer="adam", init_mode="uniform", activation="sigmoid"):
    model = Sequential()

    model.add(
        Dense(
            48,
            kernel_initializer=init_mode,
            input_shape=(47, ),
            activation=activation))
    model.add(Dropout(0.4))
    model.add(Dense(24, kernel_initializer=init_mode, activation=activation))
    model.add(Dropout(0.4))
    model.add(Dense(1, kernel_initializer=init_mode, activation="sigmoid"))

    model.compile(
        loss="binary_crossentropy", optimizer=optimizer, metrics=["accuracy"])
    return model


optimal_model = create_model(
    optimizer="Adadelta", init_mode="uniform", activation="relu")

#this will take awhile
optimal_model.fit(X_train, y_train, epochs=200, batch_size=128, verbose=1)

#print evaluation metrics
evaluation = optimal_model.evaluate(x=X_test, y=y_test, steps=1000)
print(optimal_model.metrics_names)
print(evaluation)
