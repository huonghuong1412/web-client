import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: 'Điện thoại Smartphone',
    img: 'https://salt.tikicdn.com/cache/w100/ts/product/66/98/f5/378703a4c14419c8a11d6ea6e7008abe.jpg.webp',
    url: ''
  },
  {
    title: 'Điện thoại Iphone',
    img: 'https://salt.tikicdn.com/cache/200x200/ts/product/bf/2b/10/752c9ebfd2444816669275cfc4457f88.jpg.webp',
    url: ''
  },
  {
    title: 'Điện thoại Samsung',
    img: 'https://salt.tikicdn.com/cache/200x200/ts/product/a2/0e/21/8370177bf6874a6a3f219a825980c3c2.jpg.webp',
    url: ''
  },
  {
    title: 'Máy giặt',
    img: 'https://salt.tikicdn.com/cache/200x200/ts/product/1c/20/8c/f091449b9d6175a7fff66213dca5da8c.jpg.webp',
    url: ''
  },
  {
    title: 'Laptop gaming',
    img: 'https://firebasestorage.googleapis.com/v0/b/datn-ecommerce.appspot.com/o/images%2Fproduct%2F1633964870944_hp-gaming-1.png?alt=media&token=faa23b81-07db-440f-8988-aa6f4c8207f6',
    url: ''
  },
  {
    title: 'Tai Nghe True Wireless',
    img: 'https://salt.tikicdn.com/cache/200x200/ts/product/8a/3d/30/ce3c3ceb11a008951fc5fc0d4e33bb4a.JPG.webp',
    url: ''
  },
  {
    title: 'Laptop DELL',
    img: 'https://firebasestorage.googleapis.com/v0/b/datn-ecommerce.appspot.com/o/images%2Fproduct%2F1633948546171_dell-vostro-1.jpg?alt=media&token=ecaf9446-2dd2-4cf7-964f-7d21128630db',
    url: ''
  },
  {
    title: 'Smart TV',
    img: 'https://salt.tikicdn.com/cache/200x200/media/catalog/producttmp/01/de/fd/0c4c0ba101d2e003f9d150827a50b85a.jpg.webp',
    url: ''
  },
  {
    title: 'Bàn phím máy tính',
    img: 'https://salt.tikicdn.com/cache/200x200/ts/product/eb/3c/1b/82106ff647b31ce0d94eb97fb85a39b8.jpg.webp',
    url: ''
  },
  {
    title: 'Macbook',
    img: 'https://firebasestorage.googleapis.com/v0/b/datn-ecommerce.appspot.com/o/images%2Fproduct%2F1633966039280_mac-1.jpg?alt=media&token=d960b4fd-f5a2-4ce0-a25a-d5a0e29f7f1d',
    url: ''
  },
  {
    title: 'Điện thoại Vivo',
    img: 'https://salt.tikicdn.com/cache/200x200/ts/product/b3/95/fc/70f6724a71608f645d6435ebf5e0039b.jpg.webp',
    url: ''
  },
  {
    title: 'Điện thoại OPPO',
    img: 'https://salt.tikicdn.com/cache/200x200/ts/product/4a/93/0d/10c4a72688d0c7c0d3fe9f30548ac419.jpg.webp',
    url: ''
  },
  {
    title: 'Inverter TV',
    img: 'https://cdn.tgdd.vn/Files/2019/11/25/1222206/cong-nghe-inverter-la-gi-co-loi-ich-gi-co-tren-thiet-bi-nao--10.jpg',
    url: ''
  },
  {
    title: 'Máy quay',
    img: 'https://cdn.nguyenkimmall.com/images/companies/_1/Content/ky-thuat-so/may-quay-phim/sony/may-quay-phim-sony-fdr-ax40-1.jpg',
    url: ''
  },
  {
    title: 'Ốp điện thoại',
    img: 'https://vn-live-05.slatic.net/p/a16859945df7cb8e46d685f874978855.jpg_720x720q80.jpg_.webp',
    url: ''
  },
  {
    title: 'Máy tính bảng',
    img: 'https://img.websosanh.vn/v10/users/review/images/rutf9j8dr5f8p/1545982472202_8929913.jpg?compress=85',
    url: ''
  },
  {
    title: 'Máy đọc sách',
    img: 'https://maydocsachtot.com/wp-content/uploads/2018/03/may_doc_sach_la_gi-580x405.jpg',
    url: ''
  },
  {
    title: 'Máy ảnh',
    img: 'https://vn.canon/media/image/2020/06/19/7a87af2d22694164b6850009342614ec_Thumbnail+570x400.jpg',
    url: ''
  },
  {
    title: 'Máy giặt',
    img: 'https://salt.tikicdn.com/cache/200x200/ts/product/1c/20/8c/f091449b9d6175a7fff66213dca5da8c.jpg.webp',
    url: ''
  },
  {
    title: 'Máy ảnh du lịch',
    img: 'https://cdn.nguyenkimmall.com/images/companies/_1/SEO/top-5-may-anh-du-lich/may-anh-fujifilm-xq2-thiet-ke-nho-gon.jpg',
    url: ''
  }
]

export default function Category() {
  return (
    <>
      <div className="row sm-gutter section__item">
        <div className="col l-12 m-12 c-12">
          <h3 className="home-product-title">Danh mục nổi bật</h3>
        </div>
        <div className="row sm-gutter section__content">
          <div className="col l-12 m-12 c-12">
            <div className="featured__body">
              {
                categories.map((item, index) => {
                  return (
                    <Link to={item.url} className="featured__body-item" key={index}>
                      <img className="featured__img" src={item.img} alt="" />
                      <span>{item.title}</span>
                    </Link>
                  )
                })
              }
            </div>
          </div>
          {/* <div className="col l-3 m-6 c-12">
            <Link to="/" className="home-product-category">
              <img
                src="https://salt.tikicdn.com/cache/w295/ts/banner/a8/39/18/5d93d0296f0cfc27a13c640997309b14.png.jpg"
                alt=""
              />
              <h4 className="home-product-category-name">Sách</h4>
            </Link>
          </div>
          <div className="col l-3 m-6 c-12">
            <Link to="/" className="home-product-category">
              <img
                src="https://salt.tikicdn.com/cache/w295/ts/banner/a8/39/18/5d93d0296f0cfc27a13c640997309b14.png.jpg"
                alt=""
              />
              <h4 className="home-product-category-name">Laptop</h4>
            </Link>
          </div>
          <div className="col l-3 m-6 c-12">
            <Link to="/" className="home-product-category">
              <img
                src="https://salt.tikicdn.com/cache/w295/ts/banner/a8/39/18/5d93d0296f0cfc27a13c640997309b14.png.jpg"
                alt=""
              />
              <h4 className="home-product-category-name">Điện thoại</h4>
            </Link>
          </div>
          <div className="col l-3 m-6 c-12">
            <Link to="/" className="home-product-category">
              <img
                src="https://salt.tikicdn.com/cache/w295/ts/banner/a8/39/18/5d93d0296f0cfc27a13c640997309b14.png.jpg"
                alt=""
              />
              <h4 className="home-product-category-name">Máy tính bảng</h4>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
}
