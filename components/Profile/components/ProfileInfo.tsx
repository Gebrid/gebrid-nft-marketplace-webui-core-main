import { sliceAddress } from 'helpers/sliceAddress';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import gradient from 'random-gradient';
import { IUserSession } from 'types/types';
import styles from '../styles/ProfileWrapper.module.scss';
import { useRef, useState } from 'react';

interface Props {
  theme: string | 'theme-light' | 'theme-dark';
  user: IUserSession;
  avatar: string;
}

export const ProfileInfo = ({ user, theme, avatar }: Props) => {
  const avatarSelectFormRef = useRef(null);
  const isSetAvatarClicked = useRef(false);
  const fileInput = useRef(null);

  const bgGradient = {
    background: gradient(user.address || 'a'),
  };

  function handleLogout() {
    signOut({ callbackUrl: '/signin' });
  }

  const handleFileSelect = (event: any) => {
    event.preventDefault();
    const fileInput = document.querySelector('input[name="avatarFile"]') as HTMLInputElement;
    const formData = new FormData();
    formData.append('avatarFile', fileInput.files[0]);

    fetch('/api/setAvatar', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        isSetAvatarClicked.current = false;
        return response.json()
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error)
      });
    // if (!event.target) return;
    // // const file = event.target.files[0];
    // ((avatarSelectFormRef.current as unknown) as HTMLFormElement).submit();
    // isSetAvatarClicked.current = false;
  };

  function handleProfileImageClick(e: any) {
    console.log("Set avatar clicked. Should process?", !isSetAvatarClicked.current, "file input", fileInput.current)
    if (!isSetAvatarClicked.current) {
      isSetAvatarClicked.current = true;
      fileInput.current.click();
      setTimeout(() => {
        isSetAvatarClicked.current = false;
      }, 500);
    }
  }

  return (
    <div className={styles.profileDataWrapper}>
      <div className={styles.profileImageWrapper} style={bgGradient} onClick={handleProfileImageClick}>
        {avatar && (<Image
          src={avatar}
          width={140}
          height={140}
          alt=""
        />)}
        <form method='post' action='/api/setAvatar' encType="multipart/form-data" ref={avatarSelectFormRef} style={{ position: 'absolute', top: '0px', left: '-1000px' }}>
          <input type='file' name='avatarFile' ref={fileInput} accept="image/*" onChange={handleFileSelect} />
        </form>
      </div>
      <div className={styles.profileAddressWrapper} title={user?.address}>
        <div className={styles.profileAddressIcon}>
          <Image
            src="/images/icons/icon-ethereum.svg"
            width={16}
            height={16}
            alt=""
          />
        </div>
        <span
          className={
            styles.profileAddress +
            (theme == 'theme-dark' ? ' ' + styles.dark : '')
          }
        >
          {sliceAddress(user?.address || '')}
        </span>
      </div>
      <div className={styles.profileFollowerWrapper}>
        <div className={styles.profileFollowers}>
          <span className={styles.profileFollowersCount}>0</span>
          <span className={styles.profileFollowersLabel}> followers</span>
        </div>
        <div className={styles.profileFollowing}>
          <span className={styles.profileFollowersCount}>1</span>
          <span className={styles.profileFollowersLabel}> following</span>
        </div>
      </div>
      <div className={styles.profileControlsWrapper}>
        <button className={styles.profileEditButton}>Edit</button>
        <button onClick={handleLogout} className={styles.profileShareButton}>
          {/* <Image
                    src="/images/icons/icon-external-link.svg"
                    width={18}
                    height={18}
                    alt=""
                  /> */}
          Logout
        </button>
      </div>
    </div>
  );
};
