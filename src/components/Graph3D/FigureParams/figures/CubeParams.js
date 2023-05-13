export default function CubeParams({ getFigure, figureName, setScene }) {

    const onChange = (event) => {
        const color = event.target.value;
        if (color) {
            setScene([getFigure(figureName, { color })]);
        }
    }

    return (<div>
        <span>выбор цвета</span>
        <input onChange={onChange} />
    </div>);
}