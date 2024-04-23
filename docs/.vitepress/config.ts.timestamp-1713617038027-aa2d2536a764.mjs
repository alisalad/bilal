// docs/.vitepress/config.ts
var config_default = {
  title: "Dastuurka",
  description: "An awesome docs template built by me",
  lang: "en-US",
  cleanUrls: true,
  // If this is disabled, when building it it will give deadlink errors if your markdown has the wrong links
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/somalia.svg",
    siteTitle: "Dastuurka",
    search: {
      provider: "local"
    },
    // Navbar Link
    nav: [
      { text: "About", link: "/about" },
      { text: "Contact", link: "/contact" },
      { text: "Guide", link: "/team" },
      { text: "Configs", link: "/configs" },
      {
        // Dropdown Menu
        text: "Changelog",
        items: [
          { text: "v0.0.1", link: "/item-1" },
          { text: "v0.0.2", link: "/item-2" },
          { text: "v0.0.3", link: "/item-3" }
        ]
      }
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/Evavic44/adocs" },
      { icon: "twitter", link: "https://twitter.com/alibashi5" },
      { icon: "discord", link: "..." },
      {
        icon: {
          svg: '<svg role="img" width="26.01" height="32" viewBox="0 0 256 315"><path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"/></svg>'
        },
        link: "https://google.com"
      }
    ],
    // Sidebar
    sidebar: [
      {
        text: "Cutubka Koowaad",
        collapsible: true,
        items: [
          { text: "Xeer Hoosaadka", link: "/xeer-hoosaadka" }
        ]
      },
      {
        text: "Section B",
        collapsible: false,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" }
        ]
      },
      {
        text: "Section C",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" }
        ]
      }
    ],
    // you can disable the previous and next page here
    docFooter: {
      prev: false,
      next: false
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright \xA9 2024-present Adocs"
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true
    },
    // Mobile Config only
    returnToTopLabel: "Go to Top",
    sidebarMenuLabel: "Menu"
  }
};
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFsaXNhXFxcXGJpbGFsXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYWxpc2FcXFxcYmlsYWxcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYWxpc2EvYmlsYWwvZG9jcy8udml0ZXByZXNzL2NvbmZpZy50c1wiO2V4cG9ydCBkZWZhdWx0IHtcclxuICB0aXRsZTogXCJEYXN0dXVya2FcIixcclxuICBkZXNjcmlwdGlvbjogXCJBbiBhd2Vzb21lIGRvY3MgdGVtcGxhdGUgYnVpbHQgYnkgbWVcIixcclxuICBsYW5nOiAnZW4tVVMnLFxyXG4gIGNsZWFuVXJsczogdHJ1ZSxcclxuICAvLyBJZiB0aGlzIGlzIGRpc2FibGVkLCB3aGVuIGJ1aWxkaW5nIGl0IGl0IHdpbGwgZ2l2ZSBkZWFkbGluayBlcnJvcnMgaWYgeW91ciBtYXJrZG93biBoYXMgdGhlIHdyb25nIGxpbmtzXHJcbiAgaWdub3JlRGVhZExpbmtzOiB0cnVlLFxyXG5cclxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcclxuICBcclxuICB0aGVtZUNvbmZpZzoge1xyXG4gICAgbG9nbzogXCIvc29tYWxpYS5zdmdcIixcclxuICAgIHNpdGVUaXRsZTogXCJEYXN0dXVya2FcIixcclxuICAgIHNlYXJjaDoge1xyXG4gICAgICBwcm92aWRlcjogXCJsb2NhbFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBcclxuICAgIC8vIE5hdmJhciBMaW5rXHJcbiAgICBuYXY6IFtcclxuICAgICAgeyB0ZXh0OiBcIkFib3V0XCIsIGxpbms6IFwiL2Fib3V0XCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIkNvbnRhY3RcIiwgbGluazogXCIvY29udGFjdFwiIH0sXHJcbiAgICAgIHsgdGV4dDogXCJHdWlkZVwiLCBsaW5rOiBcIi90ZWFtXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIkNvbmZpZ3NcIiwgbGluazogXCIvY29uZmlnc1wiIH0sXHJcbiAgICAgIHtcclxuICAgICAgICAvLyBEcm9wZG93biBNZW51XHJcbiAgICAgICAgdGV4dDogXCJDaGFuZ2Vsb2dcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiBcInYwLjAuMVwiLCBsaW5rOiBcIi9pdGVtLTFcIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcInYwLjAuMlwiLCBsaW5rOiBcIi9pdGVtLTJcIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcInYwLjAuM1wiLCBsaW5rOiBcIi9pdGVtLTNcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgLy8gU29jaWFsIEljb25zXHJcbiAgICBzb2NpYWxMaW5rczogW1xyXG4gICAgICB7IGljb246IFwiZ2l0aHViXCIsIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0V2YXZpYzQ0L2Fkb2NzXCIgfSxcclxuICAgICAgeyBpY29uOiBcInR3aXR0ZXJcIiwgbGluazogXCJodHRwczovL3R3aXR0ZXIuY29tL3ZpY3RvcmVrZWFcIiB9LFxyXG4gICAgICB7IGljb246IFwiZGlzY29yZFwiLCBsaW5rOiBcIi4uLlwiIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICBzdmc6ICc8c3ZnIHJvbGU9XCJpbWdcIiB3aWR0aD1cIjI2LjAxXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI1NiAzMTVcIj48cGF0aCBkPVwiTTIxMy44MDMgMTY3LjAzYy40NDIgNDcuNTggNDEuNzQgNjMuNDEzIDQyLjE5NyA2My42MTVjLS4zNSAxLjExNi02LjU5OSAyMi41NjMtMjEuNzU3IDQ0LjcxNmMtMTMuMTA0IDE5LjE1My0yNi43MDUgMzguMjM1LTQ4LjEzIDM4LjYzYy0yMS4wNS4zODgtMjcuODItMTIuNDgzLTUxLjg4OC0xMi40ODNjLTI0LjA2MSAwLTMxLjU4MiAxMi4wODgtNTEuNTEgMTIuODcxYy0yMC42OC43ODMtMzYuNDI4LTIwLjcxLTQ5LjY0LTM5Ljc5M2MtMjctMzkuMDMzLTQ3LjYzMy0xMTAuMy0xOS45MjgtMTU4LjQwNmMxMy43NjMtMjMuODkgMzguMzYtMzkuMDE3IDY1LjA1Ni0zOS40MDVjMjAuMzA3LS4zODcgMzkuNDc1IDEzLjY2MiA1MS44ODkgMTMuNjYyYzEyLjQwNiAwIDM1LjY5OS0xNi44OTUgNjAuMTg2LTE0LjQxNGMxMC4yNS40MjcgMzkuMDI2IDQuMTQgNTcuNTAzIDMxLjE4NmMtMS40OS45MjMtMzQuMzM1IDIwLjA0NC0zMy45NzggNTkuODIyTTE3NC4yNCA1MC4xOTljMTAuOTgtMTMuMjkgMTguMzY5LTMxLjc5IDE2LjM1My01MC4xOTljLTE1LjgyNi42MzYtMzQuOTYyIDEwLjU0Ni00Ni4zMTQgMjMuODI4Yy0xMC4xNzMgMTEuNzYzLTE5LjA4MiAzMC41ODktMTYuNjc4IDQ4LjYzM2MxNy42NCAxLjM2NSAzNS42Ni04Ljk2NCA0Ni42NC0yMi4yNjJcIi8+PC9zdmc+JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgLy8gU2lkZWJhclxyXG4gICAgc2lkZWJhcjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJDdXR1YmthIEtvb3dhYWRcIixcclxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7IHRleHQ6IFwiWGVlciBIb29zYWFka2FcIiwgbGluazogXCIveGVlci1ob29zYWFka2FcIiB9LFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiU2VjdGlvbiBCXCIsXHJcbiAgICAgICAgY29sbGFwc2libGU6IGZhbHNlLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6IFwiSW50cm9kdWN0aW9uXCIsIGxpbms6IFwiL2ludHJvZHVjdGlvblwiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiR2V0dGluZyBTdGFydGVkXCIsIGxpbms6IFwiL2dldHRpbmctc3RhcnRlZFwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiU2VjdGlvbiBDXCIsXHJcbiAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogXCJJbnRyb2R1Y3Rpb25cIiwgbGluazogXCIvaW50cm9kdWN0aW9uXCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJHZXR0aW5nIFN0YXJ0ZWRcIiwgbGluazogXCIvZ2V0dGluZy1zdGFydGVkXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIC8vIHlvdSBjYW4gZGlzYWJsZSB0aGUgcHJldmlvdXMgYW5kIG5leHQgcGFnZSBoZXJlXHJcbiAgICBkb2NGb290ZXI6IHtcclxuICAgICAgcHJldjogZmFsc2UsXHJcbiAgICAgIG5leHQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIG1lc3NhZ2U6IFwiUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlwiLFxyXG4gICAgICBjb3B5cmlnaHQ6IFwiQ29weXJpZ2h0IFx1MDBBOSAyMDI0LXByZXNlbnQgQWRvY3NcIixcclxuICAgIH0sXHJcbiAgICBtYXJrZG93bjoge1xyXG4gICAgICB0aGVtZTogXCJtYXRlcmlhbC1wYWxlbmlnaHRcIixcclxuICAgICAgbGluZU51bWJlcnM6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgLy8gTW9iaWxlIENvbmZpZyBvbmx5XHJcbiAgICByZXR1cm5Ub1RvcExhYmVsOiAnR28gdG8gVG9wJyxcclxuICAgIHNpZGViYXJNZW51TGFiZWw6ICdNZW51JyxcclxuICB9LFxyXG59O1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdTLElBQU8saUJBQVE7QUFBQSxFQUM3UyxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUE7QUFBQSxFQUVYLGlCQUFpQjtBQUFBLEVBRWpCLGFBQWE7QUFBQSxFQUViLGFBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxJQUNYLFFBQVE7QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUE7QUFBQSxJQUlBLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSxTQUFTLE1BQU0sU0FBUztBQUFBLE1BQ2hDLEVBQUUsTUFBTSxXQUFXLE1BQU0sV0FBVztBQUFBLE1BQ3BDLEVBQUUsTUFBTSxTQUFTLE1BQU0sUUFBUTtBQUFBLE1BQy9CLEVBQUUsTUFBTSxXQUFXLE1BQU0sV0FBVztBQUFBLE1BQ3BDO0FBQUE7QUFBQSxRQUVFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSxVQUFVLE1BQU0sVUFBVTtBQUFBLFVBQ2xDLEVBQUUsTUFBTSxVQUFVLE1BQU0sVUFBVTtBQUFBLFVBQ2xDLEVBQUUsTUFBTSxVQUFVLE1BQU0sVUFBVTtBQUFBLFFBQ3BDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsYUFBYTtBQUFBLE1BQ1gsRUFBRSxNQUFNLFVBQVUsTUFBTSxvQ0FBb0M7QUFBQSxNQUM1RCxFQUFFLE1BQU0sV0FBVyxNQUFNLGlDQUFpQztBQUFBLE1BQzFELEVBQUUsTUFBTSxXQUFXLE1BQU0sTUFBTTtBQUFBLE1BQy9CO0FBQUEsUUFDRSxNQUFNO0FBQUEsVUFDSixLQUFLO0FBQUEsUUFDUDtBQUFBLFFBQ0EsTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUE7QUFBQSxJQUVBLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFFTCxFQUFFLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCO0FBQUEsUUFFcEQ7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLGdCQUFnQixNQUFNLGdCQUFnQjtBQUFBLFVBQzlDLEVBQUUsTUFBTSxtQkFBbUIsTUFBTSxtQkFBbUI7QUFBQSxRQUN0RDtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTCxFQUFFLE1BQU0sZ0JBQWdCLE1BQU0sZ0JBQWdCO0FBQUEsVUFDOUMsRUFBRSxNQUFNLG1CQUFtQixNQUFNLG1CQUFtQjtBQUFBLFFBQ3REO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUVBLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxVQUFVO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsSUFDZjtBQUFBO0FBQUEsSUFFQSxrQkFBa0I7QUFBQSxJQUNsQixrQkFBa0I7QUFBQSxFQUNwQjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
