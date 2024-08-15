import Image from "next/image";

interface UserAvatarProps {
  onClick?: () => void;
}

const UserAvatar:React.FC<UserAvatarProps> = ({onClick}) => {
  return (
    <div onClick={onClick}>
      <div className="rounded-full border border-slate-500">
        <Image
          src="/assets/girl-placeholder.jpg"
          width={0}
          height={0}
          sizes="100vw"
          alt="user-profile"
          className="w-10 h-10 rounded-full object-cover object-center"
        />
      </div>
    </div>
  );
};
export default UserAvatar;
