
$(document).ready(function () {
    //nút menu trong dạng mobile
    $('.menu1').click(function () {
        $('.menu-thongtin-chung-pc').slideToggle()

    });
    //danh mục sản phẩm
    $('.click-sanpham').click(function () {
        $('.hienthi-sanpham').slideToggle()

    });
    //chuyển đổ 2 dạng pc và mobile
    var isSmallScreen = $(window).width() <= 768;

    $('.menu-sanpham').click(function () {
        if (isSmallScreen) {
            $('.hienthi-sanpham1').slideToggle();
        } else {
            $('.hienthi').slideToggle();
        }
    });
    $(window).resize(function () {
        var newIsSmallScreen = $(window).width() <= 768;

        if (newIsSmallScreen !== isSmallScreen) {
            isSmallScreen = newIsSmallScreen;

            $('.hienthi-sanpham1, .hienthi').slideUp();
        }
    });

    // hiển thị sản phẩm trong dạng mobile
    $('.fa1').click(function () {
        $('.noihienthi1').slideToggle()

    });
    $('.fa2').click(function () {
        $('.noihienthi2').slideToggle()

    });
    $('.fa3').click(function () {
        $('.noihienthi3').slideToggle()

    });
    $('.fa4').click(function () {
        $('.noihienthi4').slideToggle()

    });
    $('.fa5').click(function () {
        $('.noihienthi5').slideToggle()

    });
    $('.fa6').click(function () {
        $('.noihienthi6').slideToggle()

    });
    $('.fa7').click(function () {
        $('.noihienthi7').slideToggle()

    });
    //xóa bỏ hiệu ứng giữa 2 dạng
    $(window).resize(function () {
        if ($(window).width() > 768) {
            $('.menu-thongtin-chung-pc').css('display', 'block');
        } else {
            $('.menu-thongtin-chung-pc').css('display', 'none');

        }
    });
});
// tắt mở nút bấm trong menu đa cấp
function toggleIcon(element) {
    var classes = element.classList;

    if (classes.contains("fa-plus")) {
        classes.remove("fa-plus");
        classes.add("fa-minus");
    } else {
        classes.remove("fa-minus");
        classes.add("fa-plus");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    var currentIndex = 0;
    // sản phẩm
    var itemWidth = document.querySelector('.sanpham-img-conten1').clientWidth;
    var totalItems = document.querySelectorAll('.sanpham-img-conten1').length;
    var container = document.querySelector('.sanpham-img-conten');

    var leftButton = document.getElementById('traiButton');
    var rightButton = document.getElementById('phaiButton');

    leftButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        }
        slide();
    });

    rightButton.addEventListener('click', function () {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        }
        slide();
    });

    function slide() {
        var newTranslateX = -currentIndex * (itemWidth + 15); // 10 là margin-right 
        container.style.transform = 'translateX(' + newTranslateX + 'px)';//giảm margin-right
        updateButtonState();
    }
    // xóa bỏ nút 
    function updateButtonState() {
        leftButton.classList.remove('hide');
        rightButton.classList.remove('hide');
        // xóa bỏ nút trái khi ở slide đầu tiên
        if (currentIndex === 0) {
            leftButton.classList.add('hide');
        }
        // xóa bỏ nút trái khi ở slide cuối cùng
        if (currentIndex === totalItems - 1) {
            rightButton.classList.add('hide');
        }
    }

    // Kiểm tra khi kích thước màn hình thay đổi
    window.addEventListener('resize', function () {
        currentIndex = 0; // Reset index khi thay đổi kích thước màn hình
        container.style.transform = 'translateX(0)'; // Reset transform khi thay đổi kích thước màn hình
        updateButtonState();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var currentIndex = 0;
    // danh mục sản phẩm
    var itemWidth = document.querySelector('.danhmuc-noibat-sanpham').clientWidth;
    var totalItems = document.querySelectorAll('.danhmuc-noibat-sanpham').length;
    var container = document.querySelector('.danhmuc-noibat3');

    var leftButton = document.getElementById('leftButton');
    var rightButton = document.getElementById('rightButton');

    leftButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        }
        slide();
    });

    rightButton.addEventListener('click', function () {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        }
        slide();
    });

    function slide() {
        var newTranslateX = -currentIndex * (itemWidth + 38);
        container.style.transform = 'translateX(' + newTranslateX + 'px)';
        updateButtonState();
    }
    function updateButtonState() {
        leftButton.classList.remove('hide');
        rightButton.classList.remove('hide');
        if (currentIndex === 0) {
            leftButton.classList.add('hide');
        }
        if (currentIndex === totalItems - 1) {
            rightButton.classList.add('hide');
        }
    }

    window.addEventListener('resize', function () {
        currentIndex = 0;
        container.style.transform = 'translateX(0)';
        updateButtonState();
    });
});
