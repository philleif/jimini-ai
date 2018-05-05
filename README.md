# jimini-ai
Enhanced Jimini bot

# Tensorflow Commands

*Run Trainer:*

gcloud ml-engine local train \
    --module-name trainer.task \
    --package-path trainer/ \
    --job-dir output \
    --distributed \
    -- \
    --train-files ./data/candles.csv \
    --eval-files ./data/candles-test.csv \
    --train-steps 10000 \
    --eval-steps 100

