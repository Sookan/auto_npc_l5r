FROM python:3.12.10-slim


LABEL version="0.9" maintainer="DI GIUSTO Ugo <digiusto.ugo@gmail.com>"
RUN useradd -ms /bin/bash user
USER user
WORKDIR /home/user

COPY requirements.txt .
RUN pip install -r requirements.txt && rm requirements.txt

COPY api api
COPY ui ui

EXPOSE 80

WORKDIR api
ENTRYPOINT ["python", "main.py"]