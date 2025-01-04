let mode = true;
let menuList;

// If Admin ?
mode
  ? (menuList = [
      { text: "Home", icon: "./assets/sidebar/icons/1.png" },
      {
        text: "Practice Zone",
        icon: "./assets/sidebar/icons/2.svg",
        dropdown: ["Chapter Tests", "Mock Tests", "Grand Test"],
      },
      { text: "Questions Bank", icon: "./assets/sidebar/icons/10.png" },
      { text: "Manage Users", icon: "./assets/sidebar/icons/3.png" },
      { text: "Payments", icon: "./assets/sidebar/icons/12.png" },
      { text: "News & Ads", icon: "./assets/sidebar/icons/4.png" },
      { text: "Analytics", icon: "./assets/sidebar/icons/8.png" },
      {
        text: "Support",
        icon: "./assets/sidebar/icons/9.png",
        dropdown: ["Chat", "Contact Us", "Feedback"],
      },
      { text: "Log Out", icon: "./assets/sidebar/icons/11.png" },
    ])
  : // Else If User/Student ?
    (menuList = [
      { text: "Home", icon: "./assets/sidebar/icons/1.png" },
      {
        text: "Practice Zone",
        icon: "./assets/sidebar/icons/2.svg",
        dropdown: ["Chapter Tests", "Mock Tests", "Grand Test"],
      },
      { text: "Study Group", icon: "./assets/sidebar/icons/3.png" },
      { text: "News & Ads", icon: "./assets/sidebar/icons/4.png" },
      { text: "Change Course", icon: "./assets/sidebar/icons/5.png" },
      { text: "Bookmarks", icon: "./assets/sidebar/icons/6.png" },
      { text: "Personal Notes", icon: "./assets/sidebar/icons/7.png" },
      {
        text: "Support",
        icon: "./assets/sidebar/icons/9.png",
        dropdown: ["Chat", "Contact Us", "Feedback"],
      },
      { text: "Log Out", icon: "./assets/sidebar/icons/11.png" },
    ]);

export default menuList;

// Backup
// menuList = [
//   { text: "Home", icon: "./assets/sidebar/icons/1.png" },
//   {
//     text: "Practice Zone",
//     icon: "./assets/sidebar/icons/2.svg",
//     dropdown: ["Chapter Tests", "Mock Tests", "Grand Test"],
//   },
//   { text: "Study Group", icon: "./assets/sidebar/icons/3.png" },
//   { text: "Questions Bank", icon: "./assets/sidebar/icons/10.png" },
//   { text: "News & Ads", icon: "./assets/sidebar/icons/4.png" },
//   { text: "Change Course", icon: "./assets/sidebar/icons/5.png" },
//   { text: "Bookmarks", icon: "./assets/sidebar/icons/6.png" },
//   { text: "Personal Notes", icon: "./assets/sidebar/icons/7.png" },
//   { text: "Analytics", icon: "./assets/sidebar/icons/8.png" },
//   {
//     text: "Support",
//     icon: "./assets/sidebar/icons/9.png",
//     dropdown: ["Chat", "Contact Us", "Feedback"],
//   },
//   { text: "Log Out", icon: "./assets/sidebar/icons/11.png" },
// ]
