curl -H "Content-Type: application/json" -H "Authorization: Bearer iguZgpnIwr8N60cD7cYgSMbYQm9QZXEY9AaqmeD6f4d2DoyvZNEhcQdzGSSFivDylWcXR5ShTu1AfMSCJi9sAj" -X POST -d ‘{“deviceID”:”123456”}’ https://ingestion-xcdvudaz0dz3.us3.sfdcnow.com/streams/heart_rate_monito001/heart_rate_monito002/event


{"Authorization”: {“value”: iguZgpnIwr8N60cD7cYgSMbYQm9QZXEY9AaqmeD6f4d2DoyvZNEhcQdzGSSFivDylWcXR5ShTu1AfMSCJi9sAj, “type”: “Bearer”}”deviceID": { "value": 12345, "type": "string" } }

{ "deviceID": "123456", "goalHeartRateThreshold": 120, "goalDuration": 20, "first_name": "David", "last_name": "Baliles", "email": "david@heroku.com"}


Event.KeepExercising (Message & DeviceID) - logged to stream when HeartRate of XYZ hits 20
Event.ExerciseMore (Message & DeviceID) - logged when XYZ hits 20
Event.TakeaBreak (Message & DeviceID) - logged when XYZ hits 20

deviceID=string
Message=string

AlertCount incremented 

Event.Done (Message & DeviceID) - listen for this then exit

You can ignore the Response message (count=1) we’ve been getting…that is just an acknowledgement of receipt of 1 message
After every Message we POST, we need to see if there is a message waiting for us with any of the 4 Responses listed below.
JSON = event name: "Keep Exercising” {message: "Keep up the good work " & Profile.first_name & “!" deviceID: "000909D"}
JSON = event name: "Exercise More” {message: Profile.first_name + ", exercise more to reach your goal!” deviceID: "000909D”}
JSON = event name: "Take a Break” {message: Profile.first_name & ", your heart rate has been very high for a while, take a break soon.” deviceID: "000909D"}

Send initial Message after clicking “Start Sending Data”
Send ongoing HeartRate Messages every 5 seconds to the Endpoint
After sending HeartRate Message, ask the Endpoint for any of the 4 Messages listed below
You can comment out the “until count=20” in the code, and instead, just send messages until we see the event name: “Done” message hit the Endpoint

Here are the messages that the orchestration generates

event name: "Keep Exercising” {message: "Keep up the good work " & Profile.first_name & “!" deviceID: "000909D"}

event name: "Exercise More” {message: Profile.first_name + ", exercise more to reach your goal!” deviceID: "000909D"}

event name: "Take a Break” {message: Profile.first_name & ", your heart rate has been very high for a while, take a break soon.” deviceID: "000909D"}

event name: “Done" {message: “Done" deviceID: "000909D"}



IOTCaseUpdates

