# @author Team 63, Melbourne, 2023
# Hanying Li (1181148) Haichi Long (1079593) Ji Feng (1412053)
# Jiayao Lu (1079059) Xinlin Li (1068093)

FROM python:3.10.6
WORKDIR /mastodon
COPY . /mastodon
RUN pip install couchdb;\
    pip install Mastodon.py;\
    pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu;\
    pip install -q transformers;\
    chmod +x run.sh
CMD ./run.sh

