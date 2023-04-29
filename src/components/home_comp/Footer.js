import ImageAvatar from '../../static/images/image-avatar.png';

export const Footer = () => {
  return (
    <div className="footer-card">
      <img src={ImageAvatar} alt="" />
      <div>
        <span>Creation of</span>
        <span>Jules Wyvern</span>
      </div>
    </div>
  );
};
