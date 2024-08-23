import React from 'react';
import './Footer.css';
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="fut-nav">
        <div className="logo">
          <img
            src='https://kun.uz/assets/28f95538/img/icons/logo-light.svg'
            alt="Kun.uz Logo"
            className='futlogo'
          />
        </div>
        <ul className="nav-items">
          <li className="nav-item">Sayt haqida</li>
          <li className="nav-item">RSS</li>
          <li className="nav-item">Aloqa</li>
          <li className="nav-item">Reklama</li>
          <li className="nav-item">Kun.uz jamoasi</li>
        </ul>
        <div className="social-icons">
        <FaTelegram className='tele'/>
        <FaFacebook className='face'/>
        <FaTwitter className='twi'/>
        <FaInstagram className='ins'/>
        </div>
        <div className="store-links">
        <svg width="146" height="42"  viewBox="0 0 146 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M140.593 0.841438C143.096 0.841438 145.133 2.81937 145.133 5.25013V36.7501C145.133 39.1809 143.096 41.1588 140.593 41.1588H5.40741C2.90378 41.1588 0.866537 39.1809 0.866537 36.7501V5.25013C0.866537 2.81937 2.90378 0.841438 5.40741 0.841438H140.593ZM140.593 0.000125885H5.40741C2.43468 0.000125885 0 2.36394 0 5.25013V36.7501C0 39.6363 2.43468 42.0001 5.40741 42.0001H140.593C143.565 42.0001 146 39.6363 146 36.7501V5.25013C146 2.36394 143.565 0.000125885 140.593 0.000125885Z" fill="#0B0B0B"></path>
                                <path d="M32.5827 20.7733C32.5513 17.3892 35.4367 15.7428 35.5686 15.6661C33.9345 13.353 31.4017 13.0369 30.5116 13.0117C28.3843 12.7944 26.3209 14.2476 25.2372 14.2476C24.132 14.2476 22.4632 13.0327 20.6647 13.0684C18.3504 13.1031 16.1852 14.404 14.9978 16.4242C12.5471 20.5434 14.3748 26.5966 16.7227 29.9262C17.8972 31.5568 19.2696 33.3775 21.066 33.3135C22.8234 33.2431 23.4798 32.2257 25.6006 32.2257C27.7019 32.2257 28.3184 33.3135 30.1504 33.2725C32.0365 33.2431 33.224 31.6345 34.3574 29.9892C35.7146 28.1202 36.2597 26.2795 36.2813 26.185C36.237 26.1703 32.6183 24.8295 32.5827 20.7733Z" fill="#0B0B0B"></path>
                                <path d="M29.1219 10.8214C30.0671 9.67375 30.7139 8.1124 30.5343 6.52795C29.1663 6.58675 27.4553 7.4467 26.4701 8.56915C25.5984 9.55825 24.8198 11.1795 25.0209 12.7041C26.5577 12.8154 28.1356 11.9512 29.1219 10.8214Z" fill="#0B0B0B"></path>
                                <path d="M53.0467 10.5096C53.0467 11.7455 52.665 12.6758 51.9025 13.3005C51.1963 13.877 50.1927 14.1657 48.8928 14.1657C48.2482 14.1657 47.6967 14.1384 47.2349 14.0838V7.33128C47.8372 7.23678 48.4861 7.18848 49.1869 7.18848C50.4252 7.18848 51.3586 7.44993 51.988 7.97283C52.6931 8.56398 53.0467 9.40923 53.0467 10.5096ZM51.8517 10.5401C51.8517 9.73893 51.6333 9.12468 51.1963 8.69628C50.7594 8.26893 50.1213 8.05473 49.281 8.05473C48.9241 8.05473 48.6202 8.07783 48.3683 8.12613V13.2596C48.5078 13.2806 48.763 13.29 49.1339 13.29C50.0013 13.29 50.6707 13.0559 51.1423 12.5876C51.6138 12.1193 51.8517 11.4368 51.8517 10.5401Z" fill="#0B0B0B"></path>
                                <path d="M59.3833 11.589C59.3833 12.3503 59.1595 12.974 58.7117 13.4633C58.2424 13.9662 57.6205 14.2172 56.844 14.2172C56.0956 14.2172 55.4997 13.9767 55.0553 13.4937C54.6118 13.0118 54.3901 12.4038 54.3901 11.6709C54.3901 10.9044 54.6183 10.2755 55.0769 9.78722C55.5354 9.29897 56.1519 9.05432 56.9284 9.05432C57.6768 9.05432 58.2781 9.29477 58.7334 9.77672C59.166 10.245 59.3833 10.8498 59.3833 11.589ZM58.2078 11.6247C58.2078 11.168 58.1061 10.7763 57.9039 10.4498C57.6659 10.055 57.3274 9.85757 56.8873 9.85757C56.432 9.85757 56.0859 10.055 55.848 10.4498C55.6447 10.7763 55.5441 11.1743 55.5441 11.6447C55.5441 12.1014 55.6457 12.4931 55.848 12.8196C56.0935 13.2144 56.4352 13.4118 56.8765 13.4118C57.3091 13.4118 57.6486 13.2113 57.8931 12.8091C58.1029 12.4763 58.2078 12.0815 58.2078 11.6247Z" fill="#0B0B0B"></path>
                                <path d="M67.8792 9.15515L66.284 14.1049H65.2458L64.585 11.9555C64.4174 11.419 64.2811 10.8856 64.1751 10.3564H64.1546C64.0562 10.9003 63.9199 11.4326 63.7447 11.9555L63.0428 14.1049H61.9927L60.4927 9.15515H61.6574L62.2339 11.5082C62.3734 12.0647 62.488 12.595 62.5799 13.0969H62.6005C62.6848 12.6832 62.8243 12.1561 63.0212 11.5187L63.7447 9.1562H64.6683L65.3615 11.4683C65.5291 12.0322 65.6654 12.575 65.7703 13.0979H65.8017C65.8785 12.5887 65.9942 12.0458 66.1477 11.4683L66.7663 9.1562H67.8792V9.15515Z" fill="#0B0B0B"></path>
                                <path d="M73.7548 14.1048H72.6214V11.2698C72.6214 10.3962 72.2797 9.9594 71.594 9.9594C71.2577 9.9594 70.9862 10.0791 70.7753 10.3195C70.5666 10.56 70.4606 10.8435 70.4606 11.1679V14.1037H69.3272V10.5694C69.3272 10.1347 69.3132 9.6633 69.2861 9.153H70.2822L70.3352 9.92685H70.3665C70.4985 9.6864 70.6953 9.48795 70.9538 9.3294C71.2609 9.1446 71.6048 9.05115 71.9812 9.05115C72.457 9.05115 72.8528 9.20025 73.1676 9.4995C73.5591 9.86595 73.7548 10.413 73.7548 11.1396V14.1048Z" fill="#0B0B0B"></path>
                                <path d="M76.8803 14.1048H75.748V6.88391H76.8803V14.1048Z" fill="#0B0B0B" className='hov'></path>
                                <path d="M83.5533 11.589C83.5533 12.3503 83.3294 12.974 82.8817 13.4633C82.4123 13.9662 81.7894 14.2172 81.0139 14.2172C80.2645 14.2172 79.6686 13.9767 79.2252 13.4937C78.7818 13.0118 78.5601 12.4038 78.5601 11.6709C78.5601 10.9044 78.7883 10.2755 79.2468 9.78722C79.7053 9.29897 80.3218 9.05432 81.0972 9.05432C81.8467 9.05432 82.4469 9.29477 82.9033 9.77672C83.3359 10.245 83.5533 10.8498 83.5533 11.589ZM82.3766 11.6247C82.3766 11.168 82.2749 10.7763 82.0727 10.4498C81.8359 10.055 81.4963 9.85757 81.0572 9.85757C80.6008 9.85757 80.2547 10.055 80.0179 10.4498C79.8146 10.7763 79.714 11.1743 79.714 11.6447C79.714 12.1014 79.8157 12.4931 80.0179 12.8196C80.2634 13.2144 80.6051 13.4118 81.0464 13.4118C81.479 13.4118 81.8175 13.2113 82.0619 12.8091C82.2728 12.4763 82.3766 12.0815 82.3766 11.6247Z" fill="#0B0B0B"></path>
                                <path d="M89.0384 14.1048H88.0207L87.9363 13.5347H87.905C87.5567 13.9893 87.0603 14.2172 86.4158 14.2172C85.9345 14.2172 85.5452 14.067 85.2521 13.7688C84.9861 13.4979 84.853 13.1609 84.853 12.7608C84.853 12.156 85.1126 11.6951 85.6349 11.3759C86.1562 11.0567 86.8895 10.9002 87.8336 10.9076V10.8152C87.8336 10.1631 87.481 9.83762 86.7748 9.83762C86.2719 9.83762 85.8285 9.96047 85.4457 10.2041L85.2153 9.48167C85.689 9.19712 86.2741 9.05432 86.9641 9.05432C88.2965 9.05432 88.9648 9.73682 88.9648 11.1018V12.9246C88.9648 13.4192 88.9897 13.8129 89.0384 14.1048ZM87.8617 12.4038V11.6405C86.6115 11.6195 85.9864 11.9523 85.9864 12.638C85.9864 12.8963 86.0578 13.0895 86.2038 13.2186C86.3498 13.3478 86.5358 13.4118 86.7575 13.4118C87.0063 13.4118 87.2388 13.3352 87.4507 13.1829C87.6638 13.0296 87.7946 12.8354 87.8433 12.597C87.8552 12.5435 87.8617 12.4784 87.8617 12.4038Z" fill="#0B0B0B"></path>
                                <path d="M95.4785 14.1048H94.4727L94.4197 13.3099H94.3883C94.0671 13.9147 93.5199 14.2171 92.751 14.2171C92.1367 14.2171 91.6252 13.983 91.2196 13.5147C90.814 13.0464 90.6118 12.4384 90.6118 11.6919C90.6118 10.8907 90.8314 10.2418 91.2726 9.74621C91.6998 9.28421 92.2232 9.05321 92.8461 9.05321C93.5307 9.05321 94.0098 9.27686 94.2824 9.72521H94.304V6.88391H95.4385V12.7713C95.4385 13.2532 95.4514 13.6974 95.4785 14.1048ZM94.304 12.0174V11.1921C94.304 11.0493 94.2932 10.9338 94.2726 10.8456C94.2088 10.581 94.0715 10.3584 93.8627 10.1788C93.6519 9.99926 93.3977 9.90896 93.1046 9.90896C92.6818 9.90896 92.3508 10.0717 92.1075 10.3983C91.8663 10.7248 91.7441 11.1417 91.7441 11.6509C91.7441 12.1402 91.8598 12.5371 92.0924 12.8427C92.3379 13.1682 92.6688 13.3309 93.083 13.3309C93.455 13.3309 93.7524 13.1955 93.9785 12.9235C94.1969 12.6726 94.304 12.3702 94.304 12.0174Z" fill="#0B0B0B"></path>
                                <path d="M105.172 11.589C105.172 12.3503 104.948 12.974 104.5 13.4633C104.031 13.9662 103.41 14.2172 102.633 14.2172C101.885 14.2172 101.289 13.9767 100.844 13.4937C100.4 13.0118 100.179 12.4038 100.179 11.6709C100.179 10.9044 100.407 10.2755 100.865 9.78722C101.324 9.29897 101.94 9.05432 102.718 9.05432C103.465 9.05432 104.068 9.29477 104.522 9.77672C104.955 10.245 105.172 10.8498 105.172 11.589ZM103.997 11.6247C103.997 11.168 103.896 10.7763 103.694 10.4498C103.455 10.055 103.117 9.85757 102.676 9.85757C102.222 9.85757 101.876 10.055 101.637 10.4498C101.433 10.7763 101.333 11.1743 101.333 11.6447C101.333 12.1014 101.434 12.4931 101.637 12.8196C101.882 13.2144 102.224 13.4118 102.665 13.4118C103.098 13.4118 103.438 13.2113 103.683 12.8091C103.891 12.4763 103.997 12.0815 103.997 11.6247Z" fill="#0B0B0B"></path>
                                <path d="M111.266 14.1048H110.134V11.2698C110.134 10.3962 109.792 9.9594 109.105 9.9594C108.769 9.9594 108.497 10.0791 108.288 10.3195C108.078 10.56 107.973 10.8435 107.973 11.1679V14.1037H106.838V10.5694C106.838 10.1347 106.825 9.6633 106.798 9.153H107.793L107.846 9.92685H107.878C108.011 9.6864 108.208 9.48795 108.465 9.3294C108.773 9.1446 109.116 9.05115 109.493 9.05115C109.968 9.05115 110.364 9.20025 110.679 9.4995C111.071 9.86595 111.266 10.413 111.266 11.1396V14.1048Z" fill="#0B0B0B"></path>
                                <path d="M118.894 9.97931H117.646V12.3838C117.646 12.9949 117.868 13.3005 118.307 13.3005C118.51 13.3005 118.679 13.2837 118.812 13.249L118.841 14.0838C118.617 14.1657 118.323 14.2066 117.961 14.2066C117.513 14.2066 117.165 14.0743 116.913 13.8097C116.66 13.5451 116.534 13.0999 116.534 12.4752V9.97931H115.789V9.15506H116.534V8.24786L117.645 7.92236V9.15401H118.893V9.97931H118.894Z" fill="#0B0B0B"></path>
                                <path d="M124.894 14.1048H123.759V11.2908C123.759 10.4035 123.418 9.95936 122.733 9.95936C122.208 9.95936 121.848 10.2166 121.652 10.7311C121.618 10.8393 121.599 10.9716 121.599 11.127V14.1037H120.466V6.88391H121.599V9.86696H121.62C121.977 9.32411 122.489 9.05321 123.152 9.05321C123.621 9.05321 124.009 9.20231 124.317 9.50156C124.701 9.87431 124.894 10.4287 124.894 11.1616V14.1048Z" fill="#0B0B0B"></path>
                                <path d="M131.083 11.3959C131.083 11.5933 131.068 11.7592 131.041 11.8946H127.642C127.657 12.3839 127.819 12.7567 128.134 13.015C128.422 13.246 128.793 13.3615 129.247 13.3615C129.75 13.3615 130.208 13.2838 130.621 13.1273L130.799 13.8917C130.315 14.0954 129.747 14.1973 129.088 14.1973C128.298 14.1973 127.677 13.9715 127.227 13.52C126.775 13.0685 126.551 12.4627 126.551 11.7025C126.551 10.9559 126.76 10.3343 127.18 9.83872C127.619 9.30952 128.213 9.04492 128.962 9.04492C129.696 9.04492 130.253 9.30952 130.629 9.83872C130.933 10.2587 131.083 10.7785 131.083 11.3959ZM130.002 11.1113C130.01 10.7848 129.936 10.5034 129.782 10.2661C129.585 9.96052 129.286 9.80722 128.88 9.80722C128.51 9.80722 128.209 9.95632 127.978 10.2556C127.79 10.4939 127.679 10.7785 127.642 11.1113H130.002Z" fill="#0B0B0B"></path>
                                <path d="M58.0162 33.0792H55.5601L54.2148 28.9748H49.5384L48.2569 33.0792H45.8657L50.4988 19.1058H53.3604L58.0162 33.0792ZM53.8092 27.2528L52.5925 23.604C52.4638 23.2313 52.2227 22.3535 51.8669 20.9717H51.8236C51.6819 21.566 51.4537 22.4438 51.1401 23.604L49.9451 27.2528H53.8092Z" fill="#0B0B0B"></path>
                                <path d="M69.931 27.9175C69.931 29.6311 69.454 30.9856 68.5002 31.9799C67.6458 32.8651 66.5849 33.3071 65.3185 33.3071C63.9515 33.3071 62.9695 32.8304 62.3714 31.877H62.3282V37.1848H60.0224V26.3204C60.0224 25.2431 59.9932 24.1375 59.937 23.0035H61.9648L62.0935 24.6005H62.1367C62.9057 23.3972 64.0726 22.7966 65.6386 22.7966C66.8628 22.7966 67.8848 23.266 68.7024 24.2057C69.5222 25.1465 69.931 26.3834 69.931 27.9175ZM67.582 27.9994C67.582 27.0187 67.3549 26.2102 66.8985 25.5739C66.3999 24.9103 65.7305 24.5785 64.8913 24.5785C64.3224 24.5785 63.8055 24.7633 63.3437 25.1276C62.8808 25.4951 62.578 25.975 62.4363 26.5693C62.3649 26.8465 62.3292 27.0733 62.3292 27.2518V28.9318C62.3292 29.6647 62.5607 30.2831 63.0236 30.7882C63.4864 31.2932 64.0877 31.5452 64.8275 31.5452C65.6959 31.5452 66.3718 31.2197 66.8552 30.5708C67.3398 29.9209 67.582 29.0641 67.582 27.9994Z" fill="#0B0B0B"></path>
                                <path d="M81.8674 27.9175C81.8674 29.6311 81.3905 30.9856 80.4355 31.9799C79.5822 32.8651 78.5213 33.3071 77.2549 33.3071C75.8879 33.3071 74.9059 32.8304 74.3089 31.877H74.2657V37.1848H71.96V26.3204C71.96 25.2431 71.9307 24.1375 71.8745 23.0035H73.9023L74.031 24.6005H74.0742C74.8421 23.3972 76.009 22.7966 77.5761 22.7966C78.7992 22.7966 79.8212 23.266 80.641 24.2057C81.4575 25.1465 81.8674 26.3834 81.8674 27.9175ZM79.5184 27.9994C79.5184 27.0187 79.2902 26.2102 78.8338 25.5739C78.3353 24.9103 77.668 24.5785 76.8277 24.5785C76.2578 24.5785 75.7419 24.7633 75.279 25.1276C74.8161 25.4951 74.5144 25.975 74.3727 26.5693C74.3024 26.8465 74.2657 27.0733 74.2657 27.2518V28.9318C74.2657 29.6647 74.4971 30.2831 74.9578 30.7882C75.4207 31.2922 76.022 31.5452 76.7639 31.5452C77.6323 31.5452 78.3082 31.2197 78.7917 30.5708C79.2762 29.9209 79.5184 29.0641 79.5184 27.9994Z" fill="#0B0B0B"></path>
                                <path d="M95.2129 29.1607C95.2129 30.3493 94.7879 31.3163 93.9346 32.0629C92.9969 32.8787 91.6916 33.2861 90.0142 33.2861C88.4655 33.2861 87.224 32.9963 86.2842 32.4157L86.8184 30.5498C87.8307 31.1441 88.9414 31.4423 90.1516 31.4423C91.02 31.4423 91.6959 31.2512 92.1815 30.8711C92.6649 30.491 92.9061 29.9807 92.9061 29.3444C92.9061 28.7774 92.7071 28.2997 92.308 27.9122C91.9111 27.5248 91.2482 27.1646 90.3224 26.8318C87.8026 25.9193 86.5437 24.5827 86.5437 22.825C86.5437 21.6763 86.985 20.7344 87.8686 20.0015C88.7489 19.2676 89.9234 18.9011 91.392 18.9011C92.7017 18.9011 93.7897 19.1227 94.6581 19.5647L94.0817 21.3896C93.2705 20.9612 92.3535 20.747 91.3271 20.747C90.516 20.747 89.8823 20.9413 89.4281 21.3277C89.0441 21.6731 88.8516 22.0942 88.8516 22.5929C88.8516 23.1452 89.0712 23.602 89.5124 23.9611C89.8963 24.2929 90.5939 24.652 91.6062 25.0394C92.8444 25.5235 93.754 26.0894 94.3391 26.7383C94.922 27.3851 95.2129 28.1947 95.2129 29.1607Z" fill="#0B0B0B"></path>
                                <path d="M102.836 24.6835H100.294V29.5754C100.294 30.8197 100.742 31.4413 101.64 31.4413C102.052 31.4413 102.393 31.4066 102.664 31.3373L102.728 33.0373C102.273 33.2021 101.675 33.2851 100.935 33.2851C100.024 33.2851 99.3123 33.0152 98.7986 32.4766C98.2871 31.9369 98.0297 31.0318 98.0297 29.7602V24.6814H96.5156V23.0014H98.0297V21.1565L100.294 20.4929V23.0014H102.836V24.6835Z" fill="#0B0B0B"></path>
                                <path d="M114.303 27.9584C114.303 29.5071 113.847 30.7787 112.936 31.773C111.981 32.7968 110.714 33.3071 109.134 33.3071C107.611 33.3071 106.398 32.8167 105.494 31.836C104.59 30.8553 104.138 29.6174 104.138 28.1253C104.138 26.564 104.603 25.2851 105.537 24.2907C106.468 23.2953 107.724 22.7976 109.304 22.7976C110.827 22.7976 112.052 23.288 112.977 24.2697C113.862 25.2221 114.303 26.4516 114.303 27.9584ZM111.911 28.0308C111.911 27.1016 111.706 26.3046 111.292 25.64C110.809 24.8357 110.118 24.4346 109.222 24.4346C108.295 24.4346 107.591 24.8367 107.108 25.64C106.694 26.3057 106.489 27.1152 106.489 28.0728C106.489 29.0021 106.694 29.799 107.108 30.4626C107.606 31.2669 108.303 31.668 109.202 31.668C110.082 31.668 110.773 31.2585 111.272 30.4416C111.697 29.7644 111.911 28.959 111.911 28.0308Z" fill="#0B0B0B"></path>
                                <path d="M121.797 24.9722C121.569 24.9313 121.326 24.9103 121.071 24.9103C120.26 24.9103 119.632 25.2074 119.191 25.8028C118.807 26.3278 118.615 26.9914 118.615 27.7925V33.0793H116.31L116.332 26.1766C116.332 25.0153 116.302 23.9579 116.245 23.0045H118.253L118.338 24.9323H118.402C118.645 24.2698 119.029 23.7364 119.554 23.3363C120.068 22.9762 120.623 22.7966 121.221 22.7966C121.434 22.7966 121.627 22.8113 121.797 22.8376V24.9722Z" fill="#0B0B0B"></path>
                                <path d="M132.11 27.5647C132.11 27.9658 132.083 28.3039 132.025 28.58H125.108C125.135 29.5754 125.469 30.3367 126.112 30.8617C126.695 31.331 127.448 31.5662 128.374 31.5662C129.398 31.5662 130.333 31.4077 131.173 31.0895L131.534 32.6435C130.552 33.0593 129.393 33.2662 128.055 33.2662C126.446 33.2662 125.183 32.8063 124.263 31.8875C123.346 30.9688 122.887 29.735 122.887 28.1873C122.887 26.668 123.314 25.4027 124.169 24.3937C125.065 23.3164 126.275 22.7777 127.798 22.7777C129.293 22.7777 130.426 23.3164 131.195 24.3937C131.804 25.2494 132.11 26.3078 132.11 27.5647ZM129.911 26.984C129.926 26.3204 129.776 25.7471 129.463 25.2631C129.064 24.6404 128.451 24.3296 127.626 24.3296C126.872 24.3296 126.259 24.6331 125.79 25.2421C125.407 25.7261 125.178 26.3068 125.108 26.983H129.911V26.984Z" fill="#0B0B0B"></path>
                            </svg>          <svg width="146" height="42" viewBox="0 0 146 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M140.593 0.841314C143.096 0.841314 145.133 2.81925 145.133 5.25V36.75C145.133 39.1808 143.096 41.1587 140.593 41.1587H5.40741C2.90378 41.1587 0.866537 39.1808 0.866537 36.75V5.25C0.866537 2.81925 2.90378 0.841314 5.40741 0.841314H140.593ZM140.593 1.90735e-06H5.40741C2.43469 1.90735e-06 0 2.36381 0 5.25V36.75C0 39.6362 2.43469 42 5.40741 42H140.593C143.565 42 146 39.6362 146 36.75V5.25C146 2.36381 143.565 1.90735e-06 140.593 1.90735e-06Z" fill="#0B0B0B"></path>
                                <path d="M10.4742 7.91565C10.1565 8.23852 9.97266 8.74121 9.97266 9.39221V32.613C9.97266 33.264 10.1565 33.7666 10.4742 34.0895L10.5526 34.1604L23.9549 21.1535V20.8464L10.5526 7.83953L10.4742 7.91565Z" fill="#0B0B0B"></path>
                                <path d="M30.0396 25.4913L25.5771 21.1535V20.8464L30.045 16.5086L30.1451 16.565L35.4362 19.488C36.9462 20.3175 36.9462 21.6825 35.4362 22.5172L30.1451 25.4349L30.0396 25.4913Z" fill="#0B0B0B"></path>
                                <path d="M29.3337 26.2426L24.7658 21.8077L11.2852 34.8972C11.7867 35.4091 12.6046 35.4708 13.5346 34.9589L29.3337 26.2426Z" fill="#0B0B0B"></path>
                                <path d="M29.3337 15.7573L13.5346 7.04102C12.6046 6.53439 11.7867 6.59608 11.2852 7.10795L24.7658 20.1923L29.3337 15.7573Z" fill="#0B0B0B"></path>
                                <path d="M51.2813 10.7559C51.2813 11.6327 51.011 12.3349 50.4784 12.8586C49.866 13.4794 49.0684 13.7918 48.091 13.7918C47.1569 13.7918 46.3593 13.4741 45.705 12.8481C45.0493 12.2128 44.7222 11.4332 44.7222 10.5C44.7222 9.56682 45.0493 8.78719 45.705 8.15719C46.3593 7.52588 47.1569 7.20825 48.091 7.20825C48.556 7.20825 48.9994 7.30144 49.4226 7.47469C49.8443 7.64925 50.1877 7.8855 50.4364 8.17688L49.8714 8.73075C49.4374 8.23332 48.8467 7.98788 48.091 7.98788C47.4097 7.98788 46.8189 8.21888 46.3174 8.68481C45.8212 9.15206 45.5725 9.75713 45.5725 10.5C45.5725 11.2429 45.8212 11.8532 46.3174 12.3204C46.8189 12.7811 47.4097 13.0174 48.091 13.0174C48.8142 13.0174 49.4226 12.7811 49.9025 12.3152C50.2188 12.0068 50.3986 11.5815 50.4459 11.0381H48.091V10.2795H51.2327C51.2705 10.4436 51.2813 10.6024 51.2813 10.7559Z" fill="#0B0B0B" stroke="#0B0B0B" stroke-width="0.16" stroke-miterlimit="10"></path>
                                <path d="M56.2655 8.12572H53.3144V10.1207H55.9749V10.8793H53.3144V12.8743H56.2655V13.6474H52.479V7.35266H56.2655V8.12572Z" fill="#0B0B0B" stroke="#0B0B0B" stroke-width="0.16" stroke-miterlimit="10"></path>
                                <path d="M59.7833 13.6474H58.9478V8.12572H57.1377V7.35266H61.5947V8.12572H59.7833V13.6474Z" fill="#0B0B0B" stroke="#0B0B0B" stroke-width="0.16" stroke-miterlimit="10"></path>
                                <path d="M64.8203 13.6474V7.35266H65.6544V13.6474H64.8203Z" fill="#0B0B0B" stroke="#0B0B0B" stroke-width="0.16" stroke-miterlimit="10"></path>
                                <path d="M69.3516 13.6474H68.5229V8.12572H66.7061V7.35266H71.1685V8.12572H69.3516V13.6474Z" fill="#0B0B0B" stroke="#0B0B0B" stroke-width="0.16" stroke-miterlimit="10"></path>
                                <path d="M79.6069 12.8376C78.9674 13.4741 78.1752 13.7918 77.2303 13.7918C76.2799 13.7918 75.4878 13.4741 74.8483 12.8376C74.2103 12.2023 73.8926 11.4227 73.8926 10.5C73.8926 9.57732 74.2103 8.79769 74.8483 8.16244C75.4878 7.52588 76.2799 7.20825 77.2303 7.20825C78.1698 7.20825 78.962 7.52588 79.6015 8.16769C80.2449 8.80819 80.5626 9.58257 80.5626 10.5C80.5626 11.4227 80.2449 12.2023 79.6069 12.8376ZM75.4661 12.3099C75.9474 12.7811 76.5327 13.0174 77.2303 13.0174C77.9224 13.0174 78.5132 12.7811 78.9891 12.3099C79.469 11.8388 79.7123 11.2337 79.7123 10.5C79.7123 9.76632 79.469 9.16125 78.9891 8.69007C78.5132 8.21888 77.9224 7.98263 77.2303 7.98263C76.5327 7.98263 75.9474 8.21888 75.4661 8.69007C74.9862 9.16125 74.7429 9.76632 74.7429 10.5C74.7429 11.2337 74.9862 11.8388 75.4661 12.3099Z" fill="#0B0B0B" stroke="#0B0B0B" stroke-width="0.16" stroke-miterlimit="10"></path>
                                <path d="M81.7344 13.6474V7.35266H82.7483L85.9008 12.2483H85.9373L85.9008 11.0382V7.35266H86.7349V13.6474H85.8643L82.5631 8.51029H82.5266L82.5631 9.72566V13.6474H81.7344Z" fill="#0B0B0B" stroke="#0B0B0B" stroke-width="0.16" stroke-miterlimit="10"></path>
                                <path d="M73.6865 22.8401C71.1464 22.8401 69.0713 24.717 69.0713 27.3066C69.0713 29.8751 71.1464 31.7717 73.6865 31.7717C76.2321 31.7717 78.3072 29.8751 78.3072 27.3066C78.3072 24.717 76.2321 22.8401 73.6865 22.8401ZM73.6865 30.0129C72.2928 30.0129 71.0937 28.896 71.0937 27.3066C71.0937 25.6961 72.2928 24.5989 73.6865 24.5989C75.0803 24.5989 76.2848 25.6961 76.2848 27.3066C76.2848 28.896 75.0803 30.0129 73.6865 30.0129ZM63.6166 22.8401C61.071 22.8401 59.0014 24.717 59.0014 27.3066C59.0014 29.8751 61.071 31.7717 63.6166 31.7717C66.1608 31.7717 68.2318 29.8751 68.2318 27.3066C68.2318 24.717 66.1608 22.8401 63.6166 22.8401ZM63.6166 30.0129C62.2215 30.0129 61.0183 28.896 61.0183 27.3066C61.0183 25.6961 62.2215 24.5989 63.6166 24.5989C65.0103 24.5989 66.2094 25.6961 66.2094 27.3066C66.2094 28.896 65.0103 30.0129 63.6166 30.0129ZM51.6338 24.2091V26.1069H56.3017C56.1652 27.1674 55.8002 27.9471 55.2405 28.4904C54.5592 29.1467 53.498 29.8751 51.6338 29.8751C48.7611 29.8751 46.5116 27.6242 46.5116 24.8351C46.5116 22.0461 48.7611 19.7951 51.6338 19.7951C53.187 19.7951 54.3172 20.3844 55.1513 21.1483L56.5288 19.8109C55.3622 18.7294 53.8102 17.8986 51.6338 17.8986C47.6945 17.8986 44.3838 21.0105 44.3838 24.8351C44.3838 28.6598 47.6945 31.7717 51.6338 31.7717C53.7629 31.7717 55.3622 31.0944 56.6194 29.8239C57.9077 28.5731 58.3092 26.8144 58.3092 25.3943C58.3092 24.9533 58.2714 24.5477 58.2038 24.2091H51.6338ZM100.633 25.6804C100.253 24.6816 99.081 22.8401 96.6937 22.8401C94.3279 22.8401 92.3583 24.6501 92.3583 27.3066C92.3583 29.8082 94.3077 31.7717 96.9208 31.7717C99.0337 31.7717 100.253 30.5209 100.755 29.7924L99.1865 28.7779C98.6633 29.5207 97.9509 30.0129 96.9208 30.0129C95.8974 30.0129 95.1634 29.5575 94.6929 28.6598L100.845 26.1883L100.633 25.6804ZM94.3604 27.1674C94.3077 25.4454 95.7379 24.5634 96.7626 24.5634C97.5656 24.5634 98.247 24.9533 98.4741 25.5111L94.3604 27.1674ZM89.3599 31.5H91.3823V18.375H89.3599V31.5ZM86.0478 23.835H85.9802C85.526 23.3126 84.6595 22.8401 83.5618 22.8401C81.2582 22.8401 79.1521 24.8036 79.1521 27.321C79.1521 29.8239 81.2582 31.7717 83.5618 31.7717C84.6595 31.7717 85.526 31.2952 85.9802 30.7571H86.0478V31.3976C86.0478 33.1052 85.1083 34.0226 83.5929 34.0226C82.3573 34.0226 81.5908 33.1564 81.2745 32.4279L79.5157 33.1406C80.0226 34.3245 81.365 35.7814 83.5929 35.7814C85.964 35.7814 87.9648 34.4269 87.9648 31.1312V23.1118H86.0478V23.835ZM83.7348 30.0129C82.3411 30.0129 81.1744 28.8802 81.1744 27.321C81.1744 25.7473 82.3411 24.5989 83.7348 24.5989C85.1083 24.5989 86.1911 25.7473 86.1911 27.321C86.1911 28.8802 85.1083 30.0129 83.7348 30.0129ZM110.101 18.375H105.264V31.5H107.281V26.5269H110.101C112.341 26.5269 114.538 24.9533 114.538 22.4503C114.538 19.9487 112.336 18.375 110.101 18.375ZM110.154 24.7013H107.281V20.2007H110.154C111.66 20.2007 112.52 21.4148 112.52 22.4503C112.52 23.4662 111.66 24.7013 110.154 24.7013ZM122.622 22.8152C121.165 22.8152 119.649 23.4399 119.026 24.8246L120.816 25.5531C121.201 24.8246 121.91 24.5884 122.659 24.5884C123.705 24.5884 124.766 25.1987 124.782 26.2763V26.4141C124.417 26.2093 123.636 25.9061 122.675 25.9061C120.747 25.9061 118.783 26.9364 118.783 28.8593C118.783 30.618 120.362 31.7507 122.137 31.7507C123.494 31.7507 124.243 31.1561 124.713 30.4644H124.782V31.479H126.73V26.4443C126.73 24.1172 124.941 22.8152 122.622 22.8152ZM122.379 30.0077C121.719 30.0077 120.8 29.6901 120.8 28.896C120.8 27.8801 121.946 27.4903 122.939 27.4903C123.827 27.4903 124.243 27.6806 124.782 27.9313C124.624 29.1467 123.547 30.0077 122.379 30.0077ZM133.828 23.1026L131.509 28.7923H131.44L129.043 23.1026H126.868L130.47 31.0537L128.415 35.4782H130.522L136.072 23.1026H133.828ZM115.647 31.5H117.669V18.375H115.647V31.5Z" fill="#0B0B0B"></path>
                            </svg>        </div>
      </div> 
      <div className="footer-info">
        <p>
          “KUN.UZ” saytida e’lon qilingan materiallardan nusxa ko‘chirish, tarqatish va
          boshqa shakllarda foydalanish faqat tahririyat yozma roziligi bilan amalga
          oshirilishi mumkin.
        </p>
        <p>
          Guvohnoma: №0987. Berilgan sanasi: 22.06.2015-yil. Muassis: “WEB EXPERT” MCHJ.
          Tahririyat manzili: 100043, Toshkent shahri, K. Yormatov ko‘chasi, 12-uy.
          Elektron manzil: info@kun.uz.
        </p>
        <p>
          Saytda e’lon qilinayotgan mualliflik maqolalarida keltirilgan fikrlar muallifga
          tegishli va ular Kun.uz tahririyati nuqtai nazarini ifoda etmasligi mumkin.
        </p>
        <p>
          <span>T</span> - maqola va materiallarda qo‘llangan mazkur belgi ularning tijorat
          va reklama huquqlari asosida e’lon qilinganligini bildiradi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
