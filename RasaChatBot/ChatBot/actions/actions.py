# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

# from typing import Any, Text, Dict, List
#
# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher
#
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []

# for uploading PDF file
from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from uploader import upload_file

class ActionUploadFile(Action):

    def name(self) -> Text:
        return "action_upload_file"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        # Get the file from the user
        file = tracker.latest_message['entities'][0]['value']

        # Call the upload_file() function with the provided file
        url = upload_file(file)

        # Inform the user that the file has been uploaded
        if url:
            dispatcher.utter_message(text="PDF file has been uploaded.")
        else:
            dispatcher.utter_message(text="Failed to upload PDF file. Please try again.")

        return []






