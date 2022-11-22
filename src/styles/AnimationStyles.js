import { createGlobalStyle } from 'styled-components';

export const AnimationStyles = createGlobalStyle`
@keyframes fadeIn{
    0% {
        opacity:0;
        filter: blur(40px);
    }
    
    60% {
        filter: blur(10px);
    }
    100% {
        opacity:1;
        filter: blur(0);
    }
}

@keyframes shake {
    0% {
        transform: skew(0deg,0deg) translate3d(0px,0px,0px);
        transform-origin: left top;
        transform-style: preserve-3d;
    }
    33% {
        transform: skew(10deg,3deg) translate3d(15px,15px,0px) rotateY(-30deg);
        transform-origin: left bottom;
        transform-style: preserve-3d;
    }
    67% {
        transform: skew(0deg,0deg) translate3d(0px, 0px,0px) ;
        transform-origin: left top;
        transform-style: preserve-3d;
    }
    100% {
        transform: skew(-10deg,-3deg) translate3d(-25px,-15px,0px) rotateY(30deg);
        transform-origin: right bottom;
        transform-style: preserve-3d;
    }
}
@keyframes text-blur-in {
  0% {
    filter: blur(12px) opacity(0%);
  }
  100% {
    filter: blur(0);
  }
}
@keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
              transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
              transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
              transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
              transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
  }
  @keyframes slide-out-top {
    0% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(-1000px);
              transform: translateY(-1000px);
      opacity: 0;
    }
  }


.fade-in-blur-first {
    animation: fadeIn cubic-bezier(0, 0, 0.33, 1.01) 1.2s backwards;
    -webkit-animation: fadeIn cubic-bezier(0, 0, 0.33, 1.01) 1.2s backwards;
    -moz-animation: fadeIn cubic-bezier(0, 0, 0.33, 1.01) 1.8s backwards;
    -o-animation: fadeIn cubic-bezier(0, 0, 0.33, 1.01) 1.2s backwards;
    -ms-animation: fadeIn cubic-bezier(0, 0, 0.33, 1.01) 1.2s backwards;
  }
  .fade-in-blur-second {
    animation: fadeIn linear 1.2s 1.2s backwards;
    -webkit-animation: fadeIn linear 1.2s 1.2s backwards;
    -moz-animation: fadeIn linear 1.2s 1.2s backwards;
    -o-animation: fadeIn linear 1.2s 1.2s backwards;
    -ms-animation: fadeIn linear 1.2s 1.2s backwards;
  }
  .fade-in-blur-third {
    animation: fadeIn cubic-bezier(0, 0, 0.33, 1.01) 1.2s  2.4s both;
    -webkit-animation: fadeIn cubic-bezier(0, 0, 0.33, 1.01) 1.2s 2.5s both;
    -moz-animation: fadeIn cubic-bezier(0, 0, 0.33, 1.01) 1.2s   2.4s both;
    -o-animation: fadeIn cubic-bezier(0, 0, 0.33, 1.01) 1.2s   2.4s both;
    -ms-animation: fadeIn cubic-bezier(0, 0, 0.33, 1.01) 1.2s  2.4s both;
  }
  .shake {
      animation: shake infinite 17s 9s ease-in-out alternate ;
      -webkit-animation: shake infinite 17s 9s ease-in-out alternate ;
      -moz-animation: shake infinite 17s 9s ease-in-out alternate;
      -o-animation: shake infinite 17s 9s ease-in-out alternate;
      -ms-animation: shake infinite 17s 9s ease-in-out alternate;
  }
  .shake-2 {
    animation: shake infinite 17s 14s ease-in-out alternate ;
    -webkit-animation: shake infinite 17s 14s ease-in-out alternate ;
    -moz-animation: shake infinite 17s 14s ease-in-out alternate;
    -o-animation: shake infinite 17s 14s ease-in-out alternate;
    -ms-animation: shake infinite 17s 14s ease-in-out alternate;
}
.bounce-in-top {
    display: flex;
	-webkit-animation: bounce-in-top 1.1s both !important;
	        animation: bounce-in-top 1.1s both;
}
.slide-out-top {
    display: flex;
    -webkit-animation: slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.5s both;
	        animation: slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) 0.5s both;
}
`;
