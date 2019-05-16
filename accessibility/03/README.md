# Images

When building web pages and applications, there are times when users cannot view important images or videos.

## Adding an Alt Attribute

Any `<img>` tag in HTML has a built in property of `alt` which allows the developer to set alternate text that is read when a user is screen reading.



Here are three different examples:

```HTML

<img src = "https://pixel.nymag.com/imgs/fashion/daily/2018/06/29/29-drake.w700.h700.jpg">

```

```HTML

<img src = "https://pixel.nymag.com/imgs/fashion/daily/2018/06/29/29-drake.w700.h700.jpg" alt="Rapper Drake looking sad">

```

```HTML

<img src = "https://pixel.nymag.com/imgs/fashion/daily/2018/06/29/29-drake.w700.h700.jpg" alt="">

```


Bottom Line: NEVER exclude the `alt` attribute UNLESS you plan to add a specific role to the image, discussed below.

## Adding Role Attributes to Images

We can also note that an image is an image that requires no additional explanation by adding a `role="presentation"`. This is common for background images or basic static design images.

```HTML
<img src = ",/background.png" `role="presentation"`>

```
# Instructions

Open `images.html` and create a web page with the following requirements.

1. Dedicated `header`, `main`, and `footer` landmarks. Make sure the main tag has a role.

2. One alert anywhere on the page with the correct role.

3. Four images