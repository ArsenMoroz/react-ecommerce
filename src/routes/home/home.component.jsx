import { Outlet } from "react-router-dom"

import Directory from "../../components/directory/directory.component"

const Home = () => {

    const categories = 
      [
        {
          "id": 1,
          "title": "Hats",
          //"imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
          //"imageUrl": "https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg"
          //"imageUrl": "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:good,w_1700/legacy_dam/en-ca/S001358395/CA-Hats-Family-Page-NP-CATV3-Marquee-001?cb=81ef96f30c8d474e9e59aa212c22457664b3d98a"
          //"imageUrl": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
          //"imageUrl": "https://images.pexels.com/photos/760637/pexels-photo-760637.jpeg?cs=srgb&dl=pexels-garrett-morrow-760637.jpg&fm=jpg"
          "imageUrl": "https://images.pexels.com/photos/1725011/pexels-photo-1725011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          //"imageUrl": "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          "id": 2,
          "title": "Jackets",
          //"imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
          //"imageUrl": "https://media.istockphoto.com/photos/leather-jacket-picture-id484543793?k=20&m=484543793&s=612x612&w=0&h=tlBqQCS7Jzf0pN3doSZl4zV8WyuQwWelM6AgeoVPkRw="
          //"imageUrl": "https://www.angeljackets.com/guides/wp-content/uploads/2019/06/leather-jackets-e1615208574743.jpg"
          "imageUrl": "https://images.pexels.com/photos/7679798/pexels-photo-7679798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          "id": 3,
          "title": "Sneakers",
          //"imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
          //"imageUrl": "https://sneakernews.com/wp-content/uploads/2022/03/yeezy-350-beige-black-2.jpg"
          "imageUrl": "https://cdn.sanity.io/images/c1chvb1i/production/f2cd2faa60c4c925ed18765bd2a3190676c341d4-700x468.jpg/adidas-Yeezy-BOOST-350-V2-Zebra-Resale-Prices-Plummets.jpg"
          //"imageUrl": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F12%2Fadidas-yeezy-boost-350-v2-beluga-reflective-photos-0.jpg?w=960&cbr=1&q=90&fit=max"
          //"imageUrl": "https://i.ytimg.com/vi/E8GV8wvR9Vg/maxresdefault.jpg"
        },
        {
          "id": 4,
          "title": "Womens",
          //"imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
          //"imageUrl": "Photo by Bestbe  Models: https://www.pexels.com/photo/a-woman-posing-in-a-white-hoody-sweater-with-her-eyes-closed-2306113/"
          "imageUrl": "https://images.pexels.com/photos/1914877/pexels-photo-1914877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          //"imageUrl": "https://images.pexels.com/photos/3760847/pexels-photo-3760847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          
        },
        {
          "id": 5,
          "title": "Mens",
          //"imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
          //"imageUrl": "https://www.apetogentleman.com/wp-content/uploads/2018/10/Winter-Coats.png"
          //"imageUrl" : "https://cdn.brandsgateway.com/2021/06/mens-clothing.jpg"
          "imageUrl" : "https://images.pexels.com/photos/3385234/pexels-photo-3385234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      
    ];
  
    return (
        <div>
            <Outlet/>
            <Directory categories={categories} />
        </div>
    )
}

export default Home;
