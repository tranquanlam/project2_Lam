import React, { Component } from 'react';
import { FacebookProvider, Comments } from 'react-facebook';
import Contact from '../../common/contact/contact'
import Headers from '../../common/header/header'
import Nav from '../../common/nav/nav'

class detailNew extends Component {
    render() {
        return (
            <div><Contact></Contact>
                <Headers></Headers>
                <Nav></Nav>
                <div className="contentNewDetail">
                    <div className="addressLocal"><a className="addressLocal__a" href="/">Home</a><a className="addressLocal__a1" href="/">/Danh sách sản phẩm</a></div>
                    <div className="content">
                        <div className="content__classify">
                            <div className="content__classify__listProduct">
                                <div className="content__classify__listProduct__title">
                                    <p className="content__classify__listProduct__title__p">Danh mục sản phẩm</p>
                                    <hr className="content__classify__listProduct__title__hr" />
                                </div>
                                <div className="content__classify__listProduct__content">
                                    <ul>
                                        <li><a href="/">&gt;Cây chậu treo (10)</a>
                                            <hr />
                                        </li>
                                        <li><a href="/">&gt;Cây cỏ hoa (3)</a>
                                            <hr />
                                        </li>
                                        <li><a href="/">&gt;Cây dây leo (3)</a>
                                            <hr />
                                        </li>
                                        <li><a href="/">&gt;Cây để bàn</a>
                                            <hr />
                                        </li>
                                        <li><a href="/">&gt;Cây may mắn</a>
                                            <hr />
                                        </li>
                                        <li><a href="/">&gt;Cây trang trí</a>
                                            <hr />
                                        </li>
                                        <li><a href="/">&gt;Cây nội thất</a>
                                            <hr />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content__classify__newHost">
                                <div className="content__classify__newHost__title">
                                    <p className="content__classify__newHost__title__p">Tin tức nổi bật</p>
                                    <hr className="content__classify__newHost__title__hr" />
                                </div>
                                <div className="content__classify__newHost__content">
                                    <div className="card">
                                        <div className="row">
                                            <div className="col-4"><img className="card-img" src="../../IMG/new1.png" alt="..." /></div>
                                            <div className="col-8">
                                                <div className="card-body">
                                                    <p className="card-text">Hướng dẫn lựa chọn và bố trí cây xanh trong phòng khách </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row">
                                            <div className="col-4"><img className="card-img" src="../../IMG/new2.png" alt="..." /></div>
                                            <div className="col-8">
                                                <div className="card-body">
                                                    <p className="card-text">Những sai lầm nên tránh khi bố trí cây xanh trong nhà</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row">
                                            <div className="col-4"><img className="card-img" src="../../IMG/new3.png" alt="..." /></div>
                                            <div className="col-8">
                                                <div className="card-body">
                                                    <p className="card-text">7 loại cây xanh để bàn đang được giới văn phòng ưa chuộng</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row">
                                            <div className="col-4"><img className="card-img" src="../../IMG/new4.png" alt="..." /></div>
                                            <div className="col-8">
                                                <div className="card-body">
                                                    <p className="card-text">Hướng dẫn lựa chọn cây xanh trang trí trong văn phòng</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="row">
                                            <div className="col-4"><img className="card-img" src="../../IMG/new5.png" alt="..." /></div>
                                            <div className="col-8">
                                                <div className="card-body">
                                                    <p className="card-text">4 loại cây xanh thích hợp bài túy ở khu vực đại sảnh</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content__classify__tag">
                                <div className="content__classify__tag__title">
                                    <p className="content__classify__tag__title__p">Blog tag</p>
                                    <hr className="content__classify__tag__title__hr" />
                                </div>
                                <div className="content__classify__tag__content">
                                    <div className="tag"> Cây văn phòng</div>
                                    <div className="tag"> Cây phát lộc</div>
                                    <div className="tag"> Cây xanh</div>
                                    <div className="tag"> Cây trang trí</div>
                                    <div className="tag"> Cây</div>
                                    <div className="tag"> Plants</div>
                                    <div className="tag"> Sức khỏe</div>
                                    <div className="tag"> Quà tặng</div>
                                    <div className="tag"> Lưu liệm</div>
                                </div>
                            </div>
                        </div>
                        <div className="content__new">
                            <div className="content__new__title">
                                <p>Cách bố trí chậu hoa trước cửa ấn tượng ngay lần đầu tiên</p>
                            </div>
                            <div className="content__new__status">
                                <div className="date"> <img src="../../IMG/08-chi-tiet-tin_03.png" alt="/" /></div>20/12/2015
        <div className="time"><img src="../../IMG/08-chi-tiet-tin_05.png" alt="/" /></div> 11:20:00 AM
        <div className="numbercmt"><img src="../../IMG/08-chi-tiet-tin_07_01.png" alt="/" /></div> 0 Bình luận
      </div>
                            <div className="content__new__content"><img src="../../IMG/img-detail-new1.png" alt="/" />
                                <p>Như thể hiện sự thân thiện cũng như sự hiếu khách của gia chủ phần không gian trước cửa nhà luôn được đầu tư và trang trí bắt mắt cũng có thể nói đây là bộ mặt của ngôi nhà là ấn tượng đầu tiên khi khách</p>để chơi nhà bạn hãy cùng Sài Gòn hoa tham khảo một vài cách bố trí chậu hoa cảnh trước cửa nhà sao cho ấn tượng nhất nhé
        <p>7 loại cây xanh để bàn được giới văn phòng ưa chuộng những mẫu cây để bàn đang được giới văn phòng ưa chuộng cây cảnh văn phòng để bàn thông dụng những cây cảnh được giới văn phòng ưa chuộng </p>
                                <p>Cây bạch mã hoàng tử để bán có chiều cao trung bình từ 20 đến 40 cm dáng đẹp màu xanh đậm với những đường vân</p>vành nhật mọc đối xứng với nhau trong nét sang trọng và lịch lãm
        <p>Loại cây này ưa bóng chịu được nhiệt độ thấp lại có khả năng tạo ẩm và thanh lọc khí nên rất thích hợp trong văn phòng làm việc với máy lạnh mạch</p>
                                <p>Cây bạch mã hoàng tử thường được chọn để đặt trên bàn làm việc của sếp bạn nhỏ ở phòng tiếp khách hoặc bàn làm việc của các đấng mày râu</p>
                                <p>2.Cây trầu bà đế vương </p>
                                <p>Cây trầu bà đế vương tượng trưng cho sự quyền uy phong thái dẫn đầu nên thích hợp để bàn làm việc của người lãnh đạo quản lý doanh nghiệp </p>
                                <p>Lá cây trầu bà đế vương quá to dài hơi bóng</p>đường gần rõ ràng có hình dạng như trái tim xòe rộng hướng lên trên trong rất bên nghĩ và cao xanh
        <p>Tùy thuộc vào sở thích cá nhân và thiết kế chủ đạo của không gian phòng làm việc bạn có thể chọn loại trầu bà đế vương xanh trầu bà đế vương vàng hoặc trầu bà đế vương đỏ</p><img src="../../IMG/img-newline2.png" alt="/" />
                                <p>Như thể hiện sự thân thiện cũng như sự hiếu khách của gia chủ không gian trước cửa nhà luôn được đầu tư và trang trí bắt mắt cũng có thể nói đây là bộ mặt của ngôi nhà là ấn tượng đầu tiên khi một vị khách ghé chơi nhà bạn đấy Hãy cùng Sài Gòn hoa tham khảo một vài cách bố trí chậu cây </p>hoa cảnh trước cửa nhà sao cho ấn tượng nhất nhé
        <p>7 loài hoa xanh để bàn được được giới văn phòng ưa chuộng những mẫu cây để bàn trang được giới văn phòng ưa chuộng cây cảnh văn phòng để thông dụng những cây cảnh được giới văn phòng ưa chuộn</p>
                            </div>
                            <div className="content__new__comment">
                                <div className="content__new__comment__title">Bình luận (3)</div>
                                <div className="content__new__comment__chat">
                                    <div className="row">
                                        <div className="col-3"><img className="avatar" src="../../IMG/avatar.png" alt="..." /></div>
                                        <div className="col-9">
                                            <div className="nickname">
                                                <p>Nguyễn Văn An</p><a href="/">Trả lời</a>
                                            </div>
                                            <p className="content-chat">This is Photoshop's version of Lorem Ipsum.Prion gravida nibh vel velit auctor qliquet.Aenean sollicitudin,lorem quí bibendum auctor,nisi elit consequat,nec sagittis sen nibh id elit</p>
                                            <p className="content-chat-date"> <i>thứ 7,26/12/2019 13:00 AM</i></p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-3"><img className="avatar" src="../../IMG/avatar.png" alt="..." /></div>
                                        <div className="col-9">
                                            <div className="nickname">
                                                <p>Nguyễn Văn An</p><a href="/">Trả lời</a>
                                            </div>
                                            <p className="content-chat">This is Photoshop's version of Lorem Ipsum.Prion gravida nibh vel velit auctor qliquet.Aenean sollicitudin,lorem quí bibendum auctor,nisi elit consequat,nec sagittis sen nibh id elit</p>
                                            <p className="content-chat-date"> <i>thứ 7,26/12/2019 13:00 AM</i></p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-3"><img className="avatar" src="../../IMG/avatar.png" alt="..." /></div>
                                        <div className="col-9">
                                            <div className="nickname">
                                                <p>Nguyễn Văn An</p><a href="/">Trả lời</a>
                                            </div>
                                            <p className="content-chat">This is Photoshop's version of Lorem Ipsum.Prion gravida nibh vel velit auctor qliquet.Aenean sollicitudin,lorem quí bibendum auctor,nisi elit consequat,nec sagittis sen nibh id elit</p>
                                            <p className="content-chat-date"> <i>thứ 7,26/12/2019 13:00 AM</i></p>
                                        </div>
                                    </div>
                                    <hr />
                                    {/* <div class="fb-comments" data-href="/"="http://localhost:3000/detailNew" data-width="" data-numposts="5"></div> */}
                                    <FacebookProvider appId="924354107913819">
                                        <Comments href="http://localhost:3000/detailNew" />
                                    </FacebookProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default detailNew;