import React from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
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
        <div>
          {/* search */}
          <div>
            <button>
              <Search />
            </button>
          </div>

          {/* notification */}

          <div>
            <button>
              <Bell />
              {/* notification icon */}
              <span>1</span>
            </button>
          </div>

          {/* Profile */}

          <div>
            <button>
              <div>
                <User />
              </div>
              <ChevronDown />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
