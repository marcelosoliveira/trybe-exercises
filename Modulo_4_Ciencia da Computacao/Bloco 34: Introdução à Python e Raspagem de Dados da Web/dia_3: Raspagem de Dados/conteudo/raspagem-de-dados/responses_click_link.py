from parsel import Selector;
import requests;

response = requests.get("http://books.toscrape.com/");
selector = Selector(text=response.text);
thumb_url = selector.css("div.image_container a::attr(href)").getall();

for url in thumb_url:
    thumbnail_request = requests.get(f"http://books.toscrape.com/{url}");
    thumbnail_selector = Selector(text=thumbnail_request.text);
    book_title = thumbnail_selector.css("div.product_main h1");
    print(book_title.get());

# for thumbnail in selector.css("img.thumbnail").getall():
#     print(thumbnail);