# Washington Post Graphics feed

Fork de este repo de [Luis Sevillano](https://github.com/LuisSevillano/post-graphics-feed)

https://iguacel.github.io/post-graphics-feed/

## Luis te explica
There is no tag or page where you can find all the articles published by The Washington Post's graphics team. To address this, I've manually compiled an array of all the names of the authors who work in that team and used the Post's API to fetch data about their articles, including the headline, subtitle, authors, date, image, and URL.

The data is updated daily thanks to a GitHub Actions workflow and the code that fetches and parses the data can be found in the `api` folder of the repository. To avoid overloading the Post's API, only the latest five articles from each author are requested.

This project is open source and aims to allow everyone to follow the incredible work published by this outstanding team. If you work here and are not on the list or want to add someone, please open a pull request.
