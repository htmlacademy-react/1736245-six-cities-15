type TGoodsProps = {
  goods: string[];
}

function Goods({goods}: TGoodsProps) : JSX.Element {
  const goodsList = goods.map((item) => <li className="offer__inside-item" key={item}>{item}</li>);
  return(
    <ul className="offer__inside-list">
      {goodsList}
    </ul>
  );
}

export default Goods;
