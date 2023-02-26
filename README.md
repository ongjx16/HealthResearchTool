# MedSimplifieD
MedSimplifieD is a hackathon project submission for iNTUition 2023.

In response to MSD's problem, our team decided to create a web-app to help medical professionals summarize important medical research articles. The web-app would allow users to upload their own PDF documents. The documents would be then turned into text (.txt) form before it is shortened via the GPT-3 chatbot. Following the summary, users can choose if they want to turn the article's important points into slides, or if they wish to ask other related qns. The qns would be answered by a chatbot 'RASA' which was trained in interaction betwwen humans

## Installation - RASA
Users can install the RASA project via pip install python followed by rasa init. The rest of the code can be downloaded friom the github repository.


## Installation - React.js
Our react app is in the directory 'health-research-tool'. cd into this directory to run the react-app. 
### Install required dependencies 
To install required dependencies, follow steps below. 
1. Install npm
2. Install required npm dependencies
``` 
npm i npm-install-peers
```

### Start Application
To start the application, run command below in terminal. 
``` 
npm run start
```

## Running Flask App
Our API endpoints that summarises text, generate powerpoint presentations, and generate AI conversation outputs are able to be used with the html interface on the flask app. 
To start, run the commands below in the directory '/backend/flask-app'
``` 
python -m venv venv
. venv/bin/activate
pip install -r requirements.txt
flask run
```


## Credits
use of external libraries such as pikepdf, canoepy and others had to be involved.
