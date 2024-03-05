import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const projects = {
    html_page: [
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/responsive/adchi/",
        image: "/adachi.png",
        title: "Adachi",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/responsive/final-project/",
        image: "/portfolio2.png",
        title: "Portfolio",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/responsive/kidsure/",
        image: "/kidsure.png",
        title: "Kidsure",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/responsive/hunt/",
        image: "/hunt.png",
        title: "Hunt",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/responsive/resturent/",
        image: "/resturent1.png",
        title: "Resturant",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/responsive/restaurant2/",
        image: "/lambda.png",
        title: "Lambda",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/responsive/indonesian-cuisine/",
        image: "/indonesian.png",
        title: "Indonesian Cuisine",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/responsive/S_final-project/",
        image: "/siam.png",
        title: "Simple Page",
      },
      {
        link: " https://anamaadel.github.io/new_year_new_me/",
        image: "/new-year-new-me.png",
        title: "New Year New Me",
      },
      {
        link: "https://anamaadel.github.io/flower_shop/",
        image: "/flower_shop.png",
        title: "Flower Shop",
      },
      {
        link: "https://anamaadel.github.io/fruit_burst/",
        image: "/fruits.png",
        title: "Fruit Burst",
      },
      {
        link: "https://anamaadel.github.io/assignment-2/",
        image: "/gamer.png",
        title: "Gammer",
      },
      {
        link: "https://anamaadel.github.io/cit-dashboard/",
        image: "/cit.png",
        title: "CIT Dashboard",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/non-responsive/burger/",
        image: "/burger.png",
        title: "Burger Hut",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/non-responsive/myHome/",
        image: "/myhome.png",
        title: "My Home",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/non-responsive/hiking/",
        image: "/hike.png",
        title: "Hike",
      },
    ],
    js_mini_project: [
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/myjsProject/earth/index.html",
        image: "/earth.png",
        title: "Our Earth",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/myjsProject/image-zoom/",
        image: "/zoopImage.png",
        title: "Magnifying Image",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/myjsProject/colors-palet/",
        image: "/color-box.png",
        title: "Color Planet",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/myjsProject/5start/",
        image: "/5stars.png",
        title: "5 Star",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/myjsProject/dragble-slider/",
        image: "/scroll-nav.png",
        title: "Navigation Slider",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/myjsProject/drag-&-drop/",
        image: "/drag-drop.png",
        title: "Drag & Drop",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/myjsProject/gradient/",
        image: "/gredientbtn.png",
        title: "Make Button Gradients",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/myjsProject/gradient-genarator/",
        image: "/gradient-gen.png",
        title: "Gradient Generator",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/myjsProject/menu-hover-effect/",
        image: "/item-indicator.png",
        title: "Indicate Buttons",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/myjsProject/menu-item-dragable/",
        image: "/dragable-item.png",
        title: "Draggable Item",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/myjsProject/menu-item-scalable/",
        image: "/scalable-item.png",
        title: "Scalable Item",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/myjsProject/passing-item-through-stack/",
        image: "/image-change.png",
        title: "Passing Fruits Through Stack",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/myjsProject/increament-&-dicreament/",
        image: "/inc-dinc.png",
        title: "Increament & Dicreament",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/myjsProject/player/",
        image: "/player.png",
        title: "Sound Player",
      },
    ],
    reactJs: [
      {
        link: "https://todolist.vercel.app/",
        image: "/todoList.png",
        title: "Todo List",
      },
    ],
    nextJs: [
      {
        link: "https://my-ecommarce-website-wepe.vercel.app/",

        image: "/furniture.png",
        title: "Furniture shop",
      },
    ],
    gsap_project: [
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/gsap/image-gallary-using-flip/",

        image: "/galary.png",
        title: "Image Gallery",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/gsap/image-gallary-using-flip-2/",

        image: "/horizontal-galary.png",
        title: "Horizontal Image Gallery",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/gsap/image-gallary-using-flip-3/",

        image: "/gallary-page.png",
        title: "Image Gallery Page",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/gsap/scroll-image/",

        image: "/scrollEffect.png",
        title: "Scroll Effect",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/gsap/scroll-image2/",

        image: "/scrollEffect.png",
        title: "Scroll Effect 2",
      },
      {
        link: "https://my-ecommarce-website-9ri5.vercel.app/gsap/scroll-image3/",

        image: "/scroll-galary.png",
        title: "Scroll Image Gallery",
      },
    ],
  };

  res.status(200).json(projects);
}
