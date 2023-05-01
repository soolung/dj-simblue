import React from "react";
import { LogoSizeType, getSizeFromName, logoSize } from "../../../theme/size";

export const SsamblueLogo = ({ size = "DEFAULT" }: { size: LogoSizeType }) => {
  return (
    <svg
      width={getSizeFromName(logoSize, size)}
      viewBox="0 0 96 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M81.6856 6.28578L80.9726 4.48949L80.9083 4.3276L80.1333 2.37514L79.8161 1.57592C79.5113 0.808109 78.4246 0.808109 78.1198 1.57592C77.8151 2.34373 76.7283 2.34372 76.4236 1.57591C76.1188 0.808098 75.032 0.808121 74.7273 1.57593C74.4225 2.34376 73.3357 2.34379 73.0309 1.57596C72.7262 0.808138 71.6394 0.808138 71.3346 1.57596L71.0174 2.3752L70.2424 4.32762L70.1782 4.48952L69.6961 5.70398C71.2193 4.71108 73.0984 4.11257 75.2917 4.11257C77.8853 4.11257 80.0396 4.94948 81.6856 6.28578Z"
        fill="#66BB6A"
      />
      <path
        d="M68.9146 25.0269L64.0369 17.0874C60.9981 12.1411 64.557 5.77777 70.3622 5.77777L80.1176 5.77777C85.9228 5.77777 89.4817 12.1411 86.4429 17.0874L81.5652 25.0269C78.6674 29.7438 71.8124 29.7438 68.9146 25.0269Z"
        stroke="#F36E67"
        stroke-width="3.5"
      />
      <mask
        id="path-3-outside-1_1320_508"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="58"
        height="32"
        fill="black">
        <rect fill="white" width="58" height="32" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.9885 17.2318H33.0436L40.1041 6.1768L47.1646 17.2318H49.2198L42.093 6.07661H49.3855V4.33987H41.0986V1H39.1097V4.33987H30.8227V6.07661H38.0821L30.9885 17.2318ZM54.6892 17.833H56.678V2.33595H54.6892V8.9155H47.7944V10.6522H54.6892V17.833ZM30.9885 25.2141C30.9885 28.9547 33.2757 30.5913 37.1208 30.5913H51.0429C54.8881 30.5913 57.1753 28.9547 57.1753 25.2141C57.1753 21.4734 54.8881 19.8369 51.0429 19.8369H37.1208C33.2757 19.8369 30.9885 21.4734 30.9885 25.2141ZM32.9773 25.2141C32.9773 22.776 34.1707 21.5736 37.1208 21.5736H51.0429C53.9931 21.5736 55.1864 22.776 55.1864 25.2141C55.1864 27.6522 53.9931 28.8545 51.0429 28.8545H37.1208C34.1707 28.8545 32.9773 27.6522 32.9773 25.2141ZM1 16.5638H2.98887L5.34237 4.07268L7.96105 16.5638H9.94992L12.5686 4.07268L14.9221 16.5638H16.911L13.9277 2.33595H11.2095L8.95549 13.7917L6.70143 2.33595H3.98331L1 16.5638ZM24.8665 17.165H26.8553V2.33595H24.8665V8.58151H20.5572V2.33595H18.5684V17.165H20.5572V10.3182H24.8665V17.165ZM1.66296 30.5913H26.8553V19.1689H1.66296V30.5913ZM3.65183 28.8545V20.9056H24.8665V28.8545H3.65183Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.9885 17.2318H33.0436L40.1041 6.1768L47.1646 17.2318H49.2198L42.093 6.07661H49.3855V4.33987H41.0986V1H39.1097V4.33987H30.8227V6.07661H38.0821L30.9885 17.2318ZM54.6892 17.833H56.678V2.33595H54.6892V8.9155H47.7944V10.6522H54.6892V17.833ZM30.9885 25.2141C30.9885 28.9547 33.2757 30.5913 37.1208 30.5913H51.0429C54.8881 30.5913 57.1753 28.9547 57.1753 25.2141C57.1753 21.4734 54.8881 19.8369 51.0429 19.8369H37.1208C33.2757 19.8369 30.9885 21.4734 30.9885 25.2141ZM32.9773 25.2141C32.9773 22.776 34.1707 21.5736 37.1208 21.5736H51.0429C53.9931 21.5736 55.1864 22.776 55.1864 25.2141C55.1864 27.6522 53.9931 28.8545 51.0429 28.8545H37.1208C34.1707 28.8545 32.9773 27.6522 32.9773 25.2141ZM1 16.5638H2.98887L5.34237 4.07268L7.96105 16.5638H9.94992L12.5686 4.07268L14.9221 16.5638H16.911L13.9277 2.33595H11.2095L8.95549 13.7917L6.70143 2.33595H3.98331L1 16.5638ZM24.8665 17.165H26.8553V2.33595H24.8665V8.58151H20.5572V2.33595H18.5684V17.165H20.5572V10.3182H24.8665V17.165ZM1.66296 30.5913H26.8553V19.1689H1.66296V30.5913ZM3.65183 28.8545V20.9056H24.8665V28.8545H3.65183Z"
        fill="black"
      />
      <path
        d="M33.0436 17.2318V17.7318H33.3176L33.465 17.5009L33.0436 17.2318ZM30.9885 17.2318L30.5665 16.9635L30.078 17.7318H30.9885V17.2318ZM40.1041 6.1768L40.5255 5.90767L40.1041 5.24788L39.6827 5.90767L40.1041 6.1768ZM47.1646 17.2318L46.7432 17.5009L46.8907 17.7318H47.1646V17.2318ZM49.2198 17.2318V17.7318H50.1325L49.6411 16.9626L49.2198 17.2318ZM42.093 6.07661V5.57661H41.1802L41.6716 6.3458L42.093 6.07661ZM49.3855 6.07661V6.57661H49.8855V6.07661H49.3855ZM49.3855 4.33987H49.8855V3.83987H49.3855V4.33987ZM41.0986 4.33987H40.5986V4.83987H41.0986V4.33987ZM41.0986 1H41.5986V0.5H41.0986V1ZM39.1097 1V0.5H38.6097V1H39.1097ZM39.1097 4.33987V4.83987H39.6097V4.33987H39.1097ZM30.8227 4.33987V3.83987H30.3227V4.33987H30.8227ZM30.8227 6.07661H30.3227V6.57661H30.8227V6.07661ZM38.0821 6.07661L38.504 6.34491L38.9926 5.57661H38.0821V6.07661ZM56.678 17.833V18.333H57.178V17.833H56.678ZM54.6892 17.833H54.1892V18.333H54.6892V17.833ZM56.678 2.33595H57.178V1.83595H56.678V2.33595ZM54.6892 2.33595V1.83595H54.1892V2.33595H54.6892ZM54.6892 8.9155V9.4155H55.1892V8.9155H54.6892ZM47.7944 8.9155V8.4155H47.2944V8.9155H47.7944ZM47.7944 10.6522H47.2944V11.1522H47.7944V10.6522ZM54.6892 10.6522H55.1892V10.1522H54.6892V10.6522ZM2.98887 16.5638V17.0638H3.40346L3.48023 16.6564L2.98887 16.5638ZM1 16.5638L0.510642 16.4612L0.384286 17.0638H1V16.5638ZM5.34237 4.07268L5.83173 3.97009L4.85101 3.9801L5.34237 4.07268ZM7.96105 16.5638L7.47169 16.6664L7.555 17.0638H7.96105V16.5638ZM9.94992 16.5638V17.0638H10.356L10.4393 16.6664L9.94992 16.5638ZM12.5686 4.07268L13.06 3.9801L12.0792 3.97009L12.5686 4.07268ZM14.9221 16.5638L14.4307 16.6564L14.5075 17.0638H14.9221V16.5638ZM16.911 16.5638V17.0638H17.5267L17.4003 16.4612L16.911 16.5638ZM13.9277 2.33595L14.417 2.23334L14.3337 1.83595H13.9277V2.33595ZM11.2095 2.33595V1.83595H10.7983L10.7189 2.23942L11.2095 2.33595ZM8.95549 13.7917L8.46489 13.8882H9.44608L8.95549 13.7917ZM6.70143 2.33595L7.19203 2.23942L7.11264 1.83595H6.70143V2.33595ZM3.98331 2.33595V1.83595H3.57727L3.49395 2.23334L3.98331 2.33595ZM26.8553 17.165V17.665H27.3553V17.165H26.8553ZM24.8665 17.165H24.3665V17.665H24.8665V17.165ZM26.8553 2.33595H27.3553V1.83595H26.8553V2.33595ZM24.8665 2.33595V1.83595H24.3665V2.33595H24.8665ZM24.8665 8.58151V9.08151H25.3665V8.58151H24.8665ZM20.5572 8.58151H20.0572V9.08151H20.5572V8.58151ZM20.5572 2.33595H21.0572V1.83595H20.5572V2.33595ZM18.5684 2.33595V1.83595H18.0684V2.33595H18.5684ZM18.5684 17.165H18.0684V17.665H18.5684V17.165ZM20.5572 17.165V17.665H21.0572V17.165H20.5572ZM20.5572 10.3182V9.81825H20.0572V10.3182H20.5572ZM24.8665 10.3182H25.3665V9.81825H24.8665V10.3182ZM26.8553 30.5913V31.0913H27.3553V30.5913H26.8553ZM1.66296 30.5913H1.16296V31.0913H1.66296V30.5913ZM26.8553 19.1689H27.3553V18.6689H26.8553V19.1689ZM1.66296 19.1689V18.6689H1.16296V19.1689H1.66296ZM3.65183 20.9056V20.4056H3.15183V20.9056H3.65183ZM3.65183 28.8545H3.15183V29.3545H3.65183V28.8545ZM24.8665 20.9056H25.3665V20.4056H24.8665V20.9056ZM24.8665 28.8545V29.3545H25.3665V28.8545H24.8665ZM33.0436 16.7318H30.9885V17.7318H33.0436V16.7318ZM39.6827 5.90767L32.6222 16.9627L33.465 17.5009L40.5255 6.44593L39.6827 5.90767ZM47.586 16.9627L40.5255 5.90767L39.6827 6.44593L46.7432 17.5009L47.586 16.9627ZM49.2198 16.7318H47.1646V17.7318H49.2198V16.7318ZM41.6716 6.3458L48.7984 17.501L49.6411 16.9626L42.5143 5.80742L41.6716 6.3458ZM49.3855 5.57661H42.093V6.57661H49.3855V5.57661ZM48.8855 4.33987V6.07661H49.8855V4.33987H48.8855ZM41.0986 4.83987H49.3855V3.83987H41.0986V4.83987ZM40.5986 1V4.33987H41.5986V1H40.5986ZM39.1097 1.5H41.0986V0.5H39.1097V1.5ZM39.6097 4.33987V1H38.6097V4.33987H39.6097ZM30.8227 4.83987H39.1097V3.83987H30.8227V4.83987ZM31.3227 6.07661V4.33987H30.3227V6.07661H31.3227ZM38.0821 5.57661H30.8227V6.57661H38.0821V5.57661ZM31.4104 17.5001L38.504 6.34491L37.6602 5.80831L30.5665 16.9635L31.4104 17.5001ZM56.678 17.333H54.6892V18.333H56.678V17.333ZM56.178 2.33595V17.833H57.178V2.33595H56.178ZM54.6892 2.83595H56.678V1.83595H54.6892V2.83595ZM55.1892 8.9155V2.33595H54.1892V8.9155H55.1892ZM47.7944 9.4155H54.6892V8.4155H47.7944V9.4155ZM48.2944 10.6522V8.9155H47.2944V10.6522H48.2944ZM54.6892 10.1522H47.7944V11.1522H54.6892V10.1522ZM55.1892 17.833V10.6522H54.1892V17.833H55.1892ZM37.1208 30.0913C35.2576 30.0913 33.8593 29.6931 32.9327 28.9213C32.0232 28.1636 31.4885 26.9782 31.4885 25.2141H30.4885C30.4885 27.1907 31.0973 28.6939 32.2927 29.6896C33.471 30.6712 35.1389 31.0913 37.1208 31.0913V30.0913ZM51.0429 30.0913H37.1208V31.0913H51.0429V30.0913ZM56.6753 25.2141C56.6753 26.9782 56.1406 28.1636 55.231 28.9213C54.3044 29.6931 52.9061 30.0913 51.0429 30.0913V31.0913C53.0249 31.0913 54.6927 30.6712 55.871 29.6896C57.0664 28.6939 57.6753 27.1907 57.6753 25.2141H56.6753ZM51.0429 20.3369C52.9061 20.3369 54.3044 20.7351 55.231 21.5069C56.1406 22.2646 56.6753 23.45 56.6753 25.2141H57.6753C57.6753 23.2375 57.0664 21.7343 55.871 20.7386C54.6927 19.757 53.0249 19.3369 51.0429 19.3369V20.3369ZM37.1208 20.3369H51.0429V19.3369H37.1208V20.3369ZM31.4885 25.2141C31.4885 23.45 32.0232 22.2646 32.9327 21.5069C33.8593 20.7351 35.2576 20.3369 37.1208 20.3369V19.3369C35.1389 19.3369 33.471 19.757 32.2927 20.7386C31.0973 21.7343 30.4885 23.2375 30.4885 25.2141H31.4885ZM37.1208 21.0736C35.5929 21.0736 34.4077 21.3825 33.6068 22.1093C32.7946 22.8463 32.4773 23.9203 32.4773 25.2141H33.4773C33.4773 24.0698 33.7567 23.3235 34.2788 22.8498C34.812 22.3659 35.6986 22.0736 37.1208 22.0736V21.0736ZM51.0429 21.0736H37.1208V22.0736H51.0429V21.0736ZM55.6864 25.2141C55.6864 23.9203 55.3691 22.8463 54.557 22.1093C53.756 21.3825 52.5709 21.0736 51.0429 21.0736V22.0736C52.4651 22.0736 53.3517 22.3659 53.885 22.8498C54.407 23.3235 54.6864 24.0698 54.6864 25.2141H55.6864ZM51.0429 29.3545C52.5709 29.3545 53.756 29.0457 54.557 28.3189C55.3691 27.5819 55.6864 26.5079 55.6864 25.2141H54.6864C54.6864 26.3584 54.407 27.1046 53.885 27.5783C53.3517 28.0622 52.4651 28.3545 51.0429 28.3545V29.3545ZM37.1208 29.3545H51.0429V28.3545H37.1208V29.3545ZM32.4773 25.2141C32.4773 26.5079 32.7946 27.5819 33.6068 28.3189C34.4077 29.0457 35.5929 29.3545 37.1208 29.3545V28.3545C35.6986 28.3545 34.812 28.0622 34.2788 27.5783C33.7567 27.1046 33.4773 26.3584 33.4773 25.2141H32.4773ZM2.98887 16.0638H1V17.0638H2.98887V16.0638ZM4.85101 3.9801L2.49752 16.4712L3.48023 16.6564L5.83372 4.16526L4.85101 3.9801ZM8.45041 16.4612L5.83173 3.97009L4.85301 4.17527L7.47169 16.6664L8.45041 16.4612ZM9.94992 16.0638H7.96105V17.0638H9.94992V16.0638ZM12.0792 3.97009L9.46056 16.4612L10.4393 16.6664L13.058 4.17527L12.0792 3.97009ZM15.4135 16.4712L13.06 3.9801L12.0772 4.16526L14.4307 16.6564L15.4135 16.4712ZM16.911 16.0638H14.9221V17.0638H16.911V16.0638ZM13.4383 2.43856L16.4216 16.6664L17.4003 16.4612L14.417 2.23334L13.4383 2.43856ZM11.2095 2.83595H13.9277V1.83595H11.2095V2.83595ZM9.44608 13.8882L11.7001 2.43248L10.7189 2.23942L8.46489 13.6952L9.44608 13.8882ZM6.21084 2.43248L8.46489 13.8882L9.44608 13.6952L7.19203 2.23942L6.21084 2.43248ZM3.98331 2.83595H6.70143V1.83595H3.98331V2.83595ZM1.48936 16.6664L4.47267 2.43856L3.49395 2.23334L0.510642 16.4612L1.48936 16.6664ZM26.8553 16.665H24.8665V17.665H26.8553V16.665ZM26.3553 2.33595V17.165H27.3553V2.33595H26.3553ZM24.8665 2.83595H26.8553V1.83595H24.8665V2.83595ZM25.3665 8.58151V2.33595H24.3665V8.58151H25.3665ZM20.5572 9.08151H24.8665V8.08151H20.5572V9.08151ZM20.0572 2.33595V8.58151H21.0572V2.33595H20.0572ZM18.5684 2.83595H20.5572V1.83595H18.5684V2.83595ZM19.0684 17.165V2.33595H18.0684V17.165H19.0684ZM20.5572 16.665H18.5684V17.665H20.5572V16.665ZM20.0572 10.3182V17.165H21.0572V10.3182H20.0572ZM24.8665 9.81825H20.5572V10.8182H24.8665V9.81825ZM25.3665 17.165V10.3182H24.3665V17.165H25.3665ZM26.8553 30.0913H1.66296V31.0913H26.8553V30.0913ZM26.3553 19.1689V30.5913H27.3553V19.1689H26.3553ZM1.66296 19.6689H26.8553V18.6689H1.66296V19.6689ZM2.16296 30.5913V19.1689H1.16296V30.5913H2.16296ZM3.15183 20.9056V28.8545H4.15183V20.9056H3.15183ZM24.8665 20.4056H3.65183V21.4056H24.8665V20.4056ZM25.3665 28.8545V20.9056H24.3665V28.8545H25.3665ZM3.65183 29.3545H24.8665V28.3545H3.65183V29.3545Z"
        fill="black"
        mask="url(#path-3-outside-1_1320_508)"
      />
      <mask
        id="path-5-outside-2_1320_508"
        maskUnits="userSpaceOnUse"
        x="92.0111"
        y="1.22144"
        width="4"
        height="30"
        fill="black">
        <rect fill="white" x="92.0111" y="1.22144" width="4" height="30" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M95.0001 30.4768H93.0112V2.22144H95.0001V30.4768Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M95.0001 30.4768H93.0112V2.22144H95.0001V30.4768Z"
        fill="black"
      />
      <path
        d="M93.0112 30.4768H92.5112V30.9768H93.0112V30.4768ZM95.0001 30.4768V30.9768H95.5001V30.4768H95.0001ZM93.0112 2.22144V1.72144H92.5112V2.22144H93.0112ZM95.0001 2.22144H95.5001V1.72144H95.0001V2.22144ZM93.0112 30.9768H95.0001V29.9768H93.0112V30.9768ZM92.5112 2.22144V30.4768H93.5112V2.22144H92.5112ZM95.0001 1.72144H93.0112V2.72144H95.0001V1.72144ZM95.5001 30.4768V2.22144H94.5001V30.4768H95.5001Z"
        fill="black"
        mask="url(#path-5-outside-2_1320_508)"
      />
    </svg>
  );
};
