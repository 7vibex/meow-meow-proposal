/* styles.css */
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ffe6eb, #ffd6f6);
  font-family: 'Indie Flower', cursive;
  overflow: hidden;
  position: relative;
}

.container {
  text-align: center;
  background-color: #ffebee;
  padding: 40px;
  border-radius: 20px;
  border: 3px solid #ff6b81;
  box-shadow: 0 8px 20px rgba(255, 107, 129, 0.3);
  max-width: 400px;
  width: 90%;
  z-index: 2;
  position: relative;
}

.header_text {
  font-size: 36px;
  color: #ff6b81;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(255, 107, 129, 0.2);
}

.gif_container img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}

.buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 140px;
}

.btn {
  padding: 12px 24px;
  font-size: 20px;
  border: 2px solid #ff6b81;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #ff6b81;
  color: white;
  font-family: 'Indie Flower', cursive;
  box-shadow: 0 4px 10px rgba(255, 107, 129, 0.3);
}

.btn:hover {
  background-color: white;
  color: #ff6b81;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(255, 107, 129, 0.4);
}

#noButton {
  background-color: #ff4757;
  border-color: #ff4757;
}

#noButton:hover {
  background-color: white;
  color: #ff4757;
}

.heart {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: transparent;
  background-image: url('https://cdn-icons-png.flaticon.com/512/833/833472.png');
  background-size: cover;
  opacity: 0.8;
  animation: fall 4s linear infinite;
}

@keyframes fall {
  0% {
    transform: translateY(-100px);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}

.animated-bg {
  animation: bgPulse 6s ease-in-out infinite;
}

@keyframes bgPulse {
  0%, 100% {
    background: linear-gradient(135deg, #ffe6eb, #ffd6f6);
  }
  50% {
    background: linear-gradient(135deg, #ffd6f6, #ffe6eb);
  }
}
