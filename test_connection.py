import requests

backend_response = requests.get('http://localhost:3003/users')
if backend_response.status_code == 200:
    print('Backend is working')
else:
    print('Backend is not working')

frontend_response = requests.get('http://localhost:3000')
if frontend_response.status_code == 200:
    print('Frontend is working')
else:
    print('Frontend is not working')
