import React, { Component } from 'react';
import { FaUser, FaCog, FaFileUpload, FaFileAlt, FaSignOutAlt, FaBuilding } from 'react-icons/fa'; // นำเข้าไอคอนที่ต้องการ
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    languageAndCurrency: 'TH|THB', // รูปแบบ: ภาษา-สกุลเงิน
    isDropdownOpen: false,
    isUserMenuOpen: false, // เพิ่มสถานะการเปิด/ปิดเมนูผู้ใช้
  };

  // จัดการการเปลี่ยนภาษาและสกุลเงิน
  handleLanguageAndCurrencyChange = (value) => {
    this.setState({ languageAndCurrency: value, isDropdownOpen: false });
    // แยกภาษาและสกุลเงินจากตัวเลือกที่เลือก
    const [language, currency] = value.split('|');
    alert(`Language switched to ${language}, Currency switched to ${currency}`);
  };

  // จัดการการคลิกที่โปรไฟล์ผู้ใช้
  handleUserProfileClick = () => {
    this.setState((prevState) => ({ isUserMenuOpen: !prevState.isUserMenuOpen }));
  };

  // จัดการการเลือกเมนูในเมนูผู้ใช้
  handleUserMenuItemClick = (action) => {
    alert(`Selected ${action}`);
    this.setState({ isUserMenuOpen: false });
  };

  toggleDropdown = () => {
    this.setState((prevState) => ({ isDropdownOpen: !prevState.isDropdownOpen }));
  };

  render() {
    const { isDropdownOpen, languageAndCurrency, isUserMenuOpen } = this.state;
    const [currentLang, currentCurrency] = languageAndCurrency.split('|');

    return (
      <div style={styles.header}>
        {/* โลโก้ */}
        <div style={styles.logoDiv}>
          <FaBuilding style={styles.logoIcon} /> {/* เพิ่มไอคอนคอนโด */}
          <span style={styles.logoText}>Dormitory Web</span>
        </div>

        {/* ตัวเลือก */}
        <div style={styles.optionsDiv}>
          {/* ภาษาและสกุลเงิน */}
          <div style={styles.dropdown}>
            <div style={styles.selected} onClick={this.toggleDropdown}>
              <img
                src={`/path/to/${currentLang.toLowerCase()}-flag.png`} // เปลี่ยนเป็นไฟล์ธงชาติที่ใช้
                alt={currentLang}
                style={styles.flagImg}
              />
              {`${currentLang} | ${currentCurrency}`}
              <span style={styles.arrow}>▼</span>
            </div>
            {isDropdownOpen && (
              <div style={styles.dropdownMenu}>
                <div
                  style={styles.dropdownItem}
                  onClick={() => this.handleLanguageAndCurrencyChange('TH|THB')}
                >
                  <img
                    src="/path/to/thailand-flag.png"
                    alt="TH"
                    style={styles.flagImg}
                  />
                  TH | THB
                </div>
                <div
                  style={styles.dropdownItem}
                  onClick={() => this.handleLanguageAndCurrencyChange('EN|USD')}
                >
                  <img
                    src="/path/to/usa-flag.png"
                    alt="EN"
                    style={styles.flagImg}
                  />
                  EN | USD
                </div>
              </div>
            )}
          </div>

          {/* ข้อความค้นหา */}
          <span style={styles.searchText}>ค้นหา</span>

          {/* โปรไฟล์ผู้ใช้ */}
          <div
            id="userProfile"
            style={styles.userProfileDiv}
            onClick={this.handleUserProfileClick}
          >
            {/* ไอคอนบัญชีผู้ใช้ */}
            <FaUser style={styles.userIcon} />
            <span id="username">Boommathat</span>
            {isUserMenuOpen && (
              <div style={styles.userMenu}>
                <div
                  style={styles.userMenuItem}
                  onClick={() => this.handleUserMenuItemClick('ตั้งค่า')}
                >
                  <FaCog style={styles.userMenuIcon} />
                  ตั้งค่า
                </div>
                <div
                  style={styles.userMenuItem}
                  onClick={() => this.handleUserMenuItemClick('ส่งเอกสาร')}
                >
                  <FaFileUpload style={styles.userMenuIcon} />
                  ส่งเอกสาร
                </div>
                <div
                  style={styles.userMenuItem}
                  onClick={() => this.handleUserMenuItemClick('ติดตามเอกสาร')}
                >
                  <FaFileAlt style={styles.userMenuIcon} />
                  ติดตามเอกสาร
                </div>
                <div
                  style={styles.userMenuItem}
                  onClick={() => this.handleUserMenuItemClick('ออกจากระบบ')}
                >
                  <FaSignOutAlt style={styles.userMenuIcon} />
                  ออกจากระบบ
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// Styles ต่างๆ สำหรับส่วนต่างๆ ของ header
const styles = {
  header: {
    backgroundColor: '#1E90FF',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  logoDiv: {
    display: 'flex',
    alignItems: 'center',
  },
  logoIcon: {
    fontSize: '30px', // ขนาดของไอคอน
    marginRight: '10px', // ระยะห่างระหว่างไอคอนกับข้อความ
  },
  logoText: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  optionsDiv: {
    display: 'flex',
    alignItems: 'center',
  },
  dropdown: {
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    marginRight: '50px', // เพิ่มระยะห่างระหว่าง dropdown กับข้อความค้นหา
  },
  selected: {
    display: 'flex',
    alignItems: 'center',
  },
  flagImg: {
    width: '24px',
    height: '16px',
    marginRight: '8px',
  },
  arrow: {
    marginLeft: '8px',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: 'white',
    color: 'black',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // เพิ่มเงาให้เมนู
  },
  dropdownItem: {
    padding: '8px 16px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  searchText: {
    marginRight: '50px', // ระยะห่างระหว่างข้อความค้นหากับไอคอนผู้ใช้
    fontSize: '16px',
  },
  userProfileDiv: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    position: 'relative', // เพิ่ม position relative เพื่อให้ userMenu อยู่ในตำแหน่งที่ถูกต้อง
  },
  userIcon: {
    fontSize: '24px',
    marginRight: '8px',
  },
  userMenu: {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: 'white',
    color: 'black',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // เพิ่มเงาให้เมนู
  },
  userMenuItem: {
    padding: '10px 20px',
    cursor: 'pointer',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    alignItems: 'center',
  },
  userMenuItemLast: { // เปลี่ยนชื่อคลาสเป็น userMenuItemLast
    borderBottom: 'none',
  },
  userMenuIcon: {
    marginRight: '10px',
  }
};

export default App;
