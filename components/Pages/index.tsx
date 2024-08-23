import Component, { PageEl } from "@/components/Libs/Component";
import Copy from "@/components/Libs/Copy";
import Router from "next/router";
import Window from "@/components/Libs/Window";
import TextBox from "@/components/Libs/TextBox";
import Icon2Titles from "@/components/Libs/Icon2Titles";
import Icon3Titles from "@/components/Libs/Icon3Titles";

export default (p) => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {
  let styles = global.styles;
  let name = "خوش آمدید";

  return (
    <div style={{ direction: "rtl", minHeight: "100vh" }}>
      <br-x />
      <Window
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(203, 230, 230, 0.3)",
          backdropFilter: "blur(200px)",
          borderRadius: "px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src="/pics/gray345.jpg"
          alt="Sample"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "7px",
            filter: "blur(0.2px) brightness(0.8)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        />

        <div
          style={{
            width: "280px",
            height: "430px",

            borderRadius: "200px",
            position: "absolute",
            top: "200px",
            left: "30px",
            zIndex: 100,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src="/pics/sky2.webp"
            alt="Sample"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "70px",
              filter: "blur(0.2px) brightness(0.8)",
            }}
          />
          <a
            href="https://www.flaticon.com/free-icons/cloud"
            title="cloud icons"
          >
            <img
              src="/pics/sun.png"
              alt="Cloud Icon"
              style={{
                width: "95px",
                height: "95px",
                position: "absolute",
                top: "190px",
                left: "40px",
                zIndex: 101,
                filter: "blur(0.2px) brightness(0.9)",
              }}
            />
          </a>
          <h3
            style={{
              fontSize: "3em",
              color: "white",
              position: "absolute",
              bottom: "300px",
              left: "80px",
            }}
          >
            TODAY
          </h3>

          <h2
            style={{
              fontSize: "4.5em",
              color: "white",
              position: "absolute",
              bottom: "60px",
              left: "50px",
            }}
          >
            {props.w.FeelsLikeC}&deg;C
          </h2>

          {/* pic 1*/}

          <h1
            style={{
              fontSize: "2em",
              color: "#fff",
              position: "absolute",
              bottom: "20px",
              left: "50px",
            }}
          >
            {" "}
            {props.sunwea}
          </h1>
        </div>

        <div
          style={{
            width: "690px",
            height: "400px",
            backgroundColor: "#1D2833",
            borderRadius: "40px",
            position: "absolute",
            top: "210px",
            left: "240px",
            zIndex: 20,
          }}
        >
          {/* glass box 1*/}
          <div
            style={{
              width: "680px",
              height: "70px",
              backgroundColor: "#1D2833",
              borderRadius: "10px",
              backdropFilter: "blur(10px)",
              position: "absolute",
              top: "40px",
              left: "0px",
              zIndex: 30,
              boxShadow: "0 2px 20px rgba(0, 0, 0, 0.6)",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <img
              src="/icons/map2.png"
              alt="First Icon"
              style={{
                width: "40px",
                height: "40px",
                position: "absolute",
                top: "30px",
                left: "80px",
                transform: "translateY(-50%)",
                zIndex: 31,
              }}
            />

            <h3
              style={{
                fontSize: "2em",
                color: "white",
                position: "absolute",
                bottom: "20px",
                left: "120px",
              }}
            >
              {props.area.areaName[0].value} | {props.area.country[0].value}
            </h3>
          </div>

          {/*glass box 2 */}
          <div
            style={{
              width: "680px",
              height: "250px",
              backgroundColor: "#1D2833",
              borderRadius: "10px",
              backdropFilter: "blur(10px)",
              position: "absolute",
              top: "125px",
              left: "0px",
              zIndex: 30,
              boxSizing: "border-box",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              display: "flex",
              alignItems: "center",
              padding: "10px",
              gap: "50px",
              paddingLeft: "100px",
              paddingRight: "19px",
            }}
          >
            <div
              style={{
                width: "170px",
                height: "240px",
                backgroundColor: "rgba(255 255 255 / 0.06)",
                borderRadius: "100px",
                backdropFilter: "blur(10px)",
                boxShadow: "0px 20px 30px rgba(0 0 0 / 0.61)",
                margin: "0 1px",
              }}
            >
              <img
                src="/icons/clo12.png"
                alt="Second Icon"
                style={{
                  width: "90px",
                  height: "90px",
                  position: "absolute",
                  top: "50px",
                  left: "35px",
                  zIndex: 31,
                }}
              />
              <h
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: "100px",
                  left: "25px",
                  fontSize: "2em",
                }}
              ></h>
              <h2
                style={{
                  fontSize: "2.4em",
                  color: "#fff",
                  position: "absolute",
                  bottom: "50px",
                  left: "58px",
                }}
              >
                {""}% {props.w.cloudcover}
              </h2>
            </div>

            <div
              style={{
                width: "170px",
                height: "240px",
                backgroundColor: "rgba(255 255 255 / 0.06)",
                borderRadius: "100px",
                backdropFilter: "blur(10px)",
                boxShadow: "0px 20px 30px rgba(0 0 0 / 0.61)",
                margin: "0 1px",
                position: "relative",
              }}
            >
              <f-cse>
                <img
                  src="/pics/w2.png"
                  alt="Second Icon"
                  style={{
                    width: "90px",
                    height: "85px",
                    position: "absolute",
                    top: "60px",
                    zIndex: 31,
                  }}
                />
                <h1
                  style={{
                    fontSize: "2.2em",
                    color: "#fff",
                    position: "absolute",
                    bottom: "50px",
                    left: "30px",
                  }}
                >
                  {"4"}
                  <span style={{ marginLeft: "8px" }}>km/h</span>

                  {props.wind}
                </h1>
              </f-cse>
            </div>

            <div
              style={{
                width: "170px",
                height: "240px",
                backgroundColor: "rgba(255 255 255 / 0.06)",
                borderRadius: "100px",
                backdropFilter: "blur(10px)",
                boxShadow: "0px 20px 30px rgba(0 0 0 / 0.61)",
                margin: "0 1px",
              }}
            />
            <img
              src="/icons/icon.png"
              alt="First Icon"
              style={{
                width: "50px",
                height: "50px",
                position: "absolute",
                top: "100px",
                left: "155px",
                transform: "translateY(-50%)",
                zIndex: 31,
              }}
            />

            <h2
              style={{
                fontSize: "2.3em",
                color: "#fff",
                position: "absolute",
                bottom: "53px",
                left: "150px",
              }}
            >
              {""}% {props.w.humidity}
            </h2>

            {}
          </div>
        </div>
      </Window>
    </div>
  );
};

export async function getServerSideProps(context) {
  var session = await global.SSRVerify(context);
  var {
    uid,
    name,
    image,
    imageprop,
    lang,
    cchar,
    unit,
    workspace,
    servid,
    servsecret,
    usedquota,
    quota,
    quotaunit,
    status,
    regdate,
    expid,
    role,
    path,
    devmod,
    userip,
  } = session;

  let res = await fetch("https://irmapserver.ir/research/api/weather/");
  let data = await res.json();

  let w = data.current_condition[0];
  let area = data.nearest_area[0];
  let weather = data.weather[0].astronomy[0];
  let sunwea = data.current_condition[0].weatherDesc[0].value;
  let wind = data.windspeedKmph;

  return {
    props: {
      data: global.QSON.stringify({
        session,
        w: w,
        area: area,
        weather: weather,
        sunwea: sunwea,
        wind: wind,

        // nlangs,
      }),
    },
  };
}
