import requests;

try:
    response = requests.get("https://httpbin.org/delay/10", timeout=2);
except requests.Timeout:
    response = requests.get("https://httpbin.org/delay/1", timeout=2);
finally:
    print(response.status_code);