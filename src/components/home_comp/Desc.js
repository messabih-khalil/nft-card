import { ReactComponent as Eath } from '../../static/images/icon-ethereum.svg';
import { ReactComponent as Clock } from '../../static/images/icon-clock.svg';

export const Desc = () => {
  return (
    <div className="content">
      <h2>Equilibrium #3429</h2>

      <p>
        Our Equilibrium collection promotes <br />
        balance and calm.
      </p>

      <div className="price-and-duration">
        <span className="price-and-duration_price">
          <Eath />
          <span>0.041 ETH</span>
        </span>

        <span className="price-and-duration_duration">
          <Clock></Clock>
          <span>3 days left</span>
        </span>
      </div>
    </div>
  );
};
