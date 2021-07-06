from parsel import Selector;
import requests;

response = requests.get("http://books.toscrape.com/");
selector = Selector(text=response.text);
print(selector.css("img.thumbnail").get());

# for thumbnail in selector.css("img.thumbnail").getall():
#     print(thumbnail);