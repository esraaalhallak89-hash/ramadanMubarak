import React, { useState, useRef } from "react";
import Lantern from "./assets/[CITYPNG.COM]Black Ramadan Light Lantern Lamp Arabic Silhouette - 2000x2000.png";
import Laight from "./assets/—Pngtree—festive night yellow string lights_5367965.png";
import sound from "./assets/نغمة_رمضان_mbc(256k).mp3"
export default function RamadanLantern() {
  const [isOn, setIsOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);


  return (
    <div style={{
      ...styles.container,
      backgroundColor: !isOn ? "rgb(71 66 39)" : "#6a5e1e",
      backgroundImage: isOn ? `url(${Laight})` : "none",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}><audio ref={audioRef} src={sound} />
      <div style={styles.lanternWrapper} onClick={() => {
        if (!isOn) {
          setIsOn(true);
          audioRef.current?.play();
        } else {
          setIsOn(false);
          audioRef.current?.pause();
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
          }
        }
      }}>
        <img src={Lantern}
          style={{
            width: "90vw", // يتغير حسب حجم الشاشة
            maxWidth: "350px",
            minWidth: "100px",
            height: "auto",
            transition: "all 0.5s ease",
            filter: isOn
              ? "drop-shadow(0 0 30px #FFD700) drop-shadow(0 0 20px #FFA500)"
              : "drop-shadow(0 0 5px #555)",
            color: isOn ? "#FFD700" : "#444",
            marginTop: "25vh"
          }}
        />
      </div>

      {/* الزر */}
      <button style={{ ...styles.button, display: isOn ? "none" : "inline-block" }} onClick={() => {
        if (!isOn) {
          setIsOn(true);
          audioRef.current?.play();
        } else {
          setIsOn(false);
          audioRef.current?.pause();
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
          }
        }
      }}>
        {isOn ? "اطفي الفانوس " : "✨click"}
      </button>
      <div style={{
        minWidth: "20px",
        height: "auto",
        fontSize: "5vw",
        color: isOn ? "#eca02f" : "#000000",
        display: isOn ? "inline-block" : "none"
      }}>✨رمضان كريم🌙</div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 10px", // مسافة من الجوانب للشاشات الصغيرة
    boxSizing: "border-box",
  },
  lanternWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: "12px 25px",
    fontSize: "1.2rem",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "rgb(71 66 39)",
    color: "rgb(254 180 87)",
    transition: "all 0.3s ease",
  },
};