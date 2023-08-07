body, html {
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
}

.container {
    position: relative;
}

.light {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: red;
    margin: 0 auto;
    transition: background-color 0.5s;
}

.sidebar {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #333;
    color: white;
    padding: 20px;
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.toggle {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.toggle label {
    margin-right: 10px;
}

.toggle input[type="checkbox"] {
    display: none;
}

.indicator {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ff5252;
    transition: background-color 0.5s;
}
