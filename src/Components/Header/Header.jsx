import { useState } from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <img className={styles.logo} src={logo} alt="logo" />

        {/* navbar */}
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="">
            Tv Shows
          </Link>
          <Link className={styles.navLink} to="">
            Home
          </Link>
          <Link className={styles.navLink} to="">
            Movies
          </Link>
          <Link className={styles.navLink} to="">
            New & Popular
          </Link>
          <Link className={styles.navLink} to="">
            My List
          </Link>
          <Link className={styles.navLink} to="">
            Browse by Language
          </Link>
        </nav>

        {/* right side section */}
        <div className={styles.rightSection}>
          {/* search */}
          <div className={styles.searchSection}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>

            {isSearchOpen && (
              <input
                type="text"
                placeholder="Movie title"
                className={styles.searchInput}
              />
            )}
          </div>

          {/* notification */}

          <button className={styles.iconButton}>
            <Bell size={20} />
            {/* notification icon */}
            <span className={styles.notificationBadge}>1</span>
          </button>

          {/* Profile */}

          <div className={styles.profileContainer}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>
              <ChevronDown />
            </button>
            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <Link className={styles.profileMenuItems}>Account</Link>
                <Link className={styles.profileMenuItems}>Help center</Link>
                <br className={styles.profileMenuDivider} />
                <button className={styles.profileMenuItems}>Sign out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
