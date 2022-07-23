export const ToolTipComponent = ({ protien, fat, carbs }) => {
    return (
        <div className="tooltip">
            <div className="tooltip_quantity">
                <div id="flex">
                    <div>PROTIEN</div>
                    <div id="align_right">70g</div>
                </div>
                <div id="progress" style={{ color: "#F45C84" }}>
                    <div style={{ background: "#F45C84", height: "10px", width: protien * 100 / 70 + "%" }}></div><text>{protien}g</text>
                </div>
            </div>
            <div className="tooltip_quantity">
                <div id="flex">
                    <div>FATS</div>
                    <div id="align_right">70g</div>
                </div>
                <div id="progress" style={{ color: "#03C6FA" }}>
                    <div style={{ background: "#03C6FA", height: "10px", width: fat * 100 / 70 + "%" }}></div><text>{fat}g</text>
                </div>
            </div>
            <div className="tooltip_quantity">
                <div id="flex">
                    <div>CARBS</div>
                    <div id="align_right">70g</div>
                </div>
                <div id="progress" style={{ color: "#F0C50F" }}>
                    <div style={{ background: "#F0C50F", height: "10px", width: carbs * 100 / 70 + "%" }}></div><text>{carbs}g</text>
                </div>
            </div>
        </div>
    )
}