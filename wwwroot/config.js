"use strict";

System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": ["runtime", "optimisation.modules.system", "es7.decorators"]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "babel": "npm:babel-core@5.8.25",
    "babel-runtime": "npm:babel-runtime@5.8.25",
    "core-js": "npm:core-js@1.2.1",
    "jquery": "github:components/jquery@2.1.4",
    "knockout": "github:knockout/knockout@3.3.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.25": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDWixTQUFPLEVBQUUsR0FBRztBQUNaLHFCQUFtQixFQUFFLElBQUk7QUFDekIsWUFBVSxFQUFFLE9BQU87QUFDbkIsY0FBWSxFQUFFO0FBQ1osY0FBVSxFQUFFLENBQ1YsU0FBUyxFQUNULDZCQUE2QixFQUM3QixnQkFBZ0IsQ0FDakI7R0FDRjtBQUNELE9BQUssRUFBRTtBQUNMLGNBQVUsRUFBRSx3QkFBd0I7QUFDcEMsV0FBTyxFQUFFLHFCQUFxQjtHQUMvQjs7QUFFRCxLQUFHLEVBQUU7QUFDSCxXQUFPLEVBQUUsdUJBQXVCO0FBQ2hDLG1CQUFlLEVBQUUsMEJBQTBCO0FBQzNDLGFBQVMsRUFBRSxtQkFBbUI7QUFDOUIsWUFBUSxFQUFFLGdDQUFnQztBQUMxQyxjQUFVLEVBQUUsZ0NBQWdDO0FBQzVDLHVDQUFtQyxFQUFFO0FBQ25DLGNBQVEsRUFBRSxrQkFBa0I7S0FDN0I7QUFDRCx3Q0FBb0MsRUFBRTtBQUNwQyxlQUFTLEVBQUUsb0JBQW9CO0tBQ2hDO0FBQ0QscUNBQWlDLEVBQUU7QUFDakMsWUFBTSxFQUFFLGlCQUFpQjtLQUMxQjtBQUNELHNCQUFrQixFQUFFO0FBQ2xCLFlBQU0sRUFBRSxpQkFBaUI7S0FDMUI7QUFDRCw4QkFBMEIsRUFBRTtBQUMxQixlQUFTLEVBQUUsb0NBQW9DO0tBQ2hEO0FBQ0QsdUJBQW1CLEVBQUU7QUFDbkIsVUFBSSxFQUFFLCtCQUErQjtBQUNyQyxlQUFTLEVBQUUsb0NBQW9DO0FBQy9DLHFCQUFlLEVBQUUsbUNBQW1DO0tBQ3JEO0FBQ0Qsd0JBQW9CLEVBQUU7QUFDcEIsWUFBTSxFQUFFLGlDQUFpQztLQUMxQztBQUNELHdCQUFvQixFQUFFO0FBQ3BCLGNBQVEsRUFBRSxtQ0FBbUM7S0FDOUM7QUFDRCxxQkFBaUIsRUFBRTtBQUNqQixnQkFBVSxFQUFFLG9CQUFvQjtBQUNoQyxlQUFTLEVBQUUsb0NBQW9DO0tBQ2hEO0dBQ0Y7Q0FDRixDQUFDLENBQUMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXNDb250ZW50IjpbIlN5c3RlbS5jb25maWcoe1xuICBiYXNlVVJMOiBcIi9cIixcbiAgZGVmYXVsdEpTRXh0ZW5zaW9uczogdHJ1ZSxcbiAgdHJhbnNwaWxlcjogXCJiYWJlbFwiLFxuICBiYWJlbE9wdGlvbnM6IHtcbiAgICBcIm9wdGlvbmFsXCI6IFtcbiAgICAgIFwicnVudGltZVwiLFxuICAgICAgXCJvcHRpbWlzYXRpb24ubW9kdWxlcy5zeXN0ZW1cIixcbiAgICAgIFwiZXM3LmRlY29yYXRvcnNcIlxuICAgIF1cbiAgfSxcbiAgcGF0aHM6IHtcbiAgICBcImdpdGh1YjoqXCI6IFwianNwbV9wYWNrYWdlcy9naXRodWIvKlwiLFxuICAgIFwibnBtOipcIjogXCJqc3BtX3BhY2thZ2VzL25wbS8qXCJcbiAgfSxcblxuICBtYXA6IHtcbiAgICBcImJhYmVsXCI6IFwibnBtOmJhYmVsLWNvcmVANS44LjI1XCIsXG4gICAgXCJiYWJlbC1ydW50aW1lXCI6IFwibnBtOmJhYmVsLXJ1bnRpbWVANS44LjI1XCIsXG4gICAgXCJjb3JlLWpzXCI6IFwibnBtOmNvcmUtanNAMS4yLjFcIixcbiAgICBcImpxdWVyeVwiOiBcImdpdGh1Yjpjb21wb25lbnRzL2pxdWVyeUAyLjEuNFwiLFxuICAgIFwia25vY2tvdXRcIjogXCJnaXRodWI6a25vY2tvdXQva25vY2tvdXRAMy4zLjBcIixcbiAgICBcImdpdGh1Yjpqc3BtL25vZGVsaWJzLWFzc2VydEAwLjEuMFwiOiB7XG4gICAgICBcImFzc2VydFwiOiBcIm5wbTphc3NlcnRAMS4zLjBcIlxuICAgIH0sXG4gICAgXCJnaXRodWI6anNwbS9ub2RlbGlicy1wcm9jZXNzQDAuMS4yXCI6IHtcbiAgICAgIFwicHJvY2Vzc1wiOiBcIm5wbTpwcm9jZXNzQDAuMTEuMlwiXG4gICAgfSxcbiAgICBcImdpdGh1Yjpqc3BtL25vZGVsaWJzLXV0aWxAMC4xLjBcIjoge1xuICAgICAgXCJ1dGlsXCI6IFwibnBtOnV0aWxAMC4xMC4zXCJcbiAgICB9LFxuICAgIFwibnBtOmFzc2VydEAxLjMuMFwiOiB7XG4gICAgICBcInV0aWxcIjogXCJucG06dXRpbEAwLjEwLjNcIlxuICAgIH0sXG4gICAgXCJucG06YmFiZWwtcnVudGltZUA1LjguMjVcIjoge1xuICAgICAgXCJwcm9jZXNzXCI6IFwiZ2l0aHViOmpzcG0vbm9kZWxpYnMtcHJvY2Vzc0AwLjEuMlwiXG4gICAgfSxcbiAgICBcIm5wbTpjb3JlLWpzQDEuMi4xXCI6IHtcbiAgICAgIFwiZnNcIjogXCJnaXRodWI6anNwbS9ub2RlbGlicy1mc0AwLjEuMlwiLFxuICAgICAgXCJwcm9jZXNzXCI6IFwiZ2l0aHViOmpzcG0vbm9kZWxpYnMtcHJvY2Vzc0AwLjEuMlwiLFxuICAgICAgXCJzeXN0ZW1qcy1qc29uXCI6IFwiZ2l0aHViOnN5c3RlbWpzL3BsdWdpbi1qc29uQDAuMS4wXCJcbiAgICB9LFxuICAgIFwibnBtOmluaGVyaXRzQDIuMC4xXCI6IHtcbiAgICAgIFwidXRpbFwiOiBcImdpdGh1Yjpqc3BtL25vZGVsaWJzLXV0aWxAMC4xLjBcIlxuICAgIH0sXG4gICAgXCJucG06cHJvY2Vzc0AwLjExLjJcIjoge1xuICAgICAgXCJhc3NlcnRcIjogXCJnaXRodWI6anNwbS9ub2RlbGlicy1hc3NlcnRAMC4xLjBcIlxuICAgIH0sXG4gICAgXCJucG06dXRpbEAwLjEwLjNcIjoge1xuICAgICAgXCJpbmhlcml0c1wiOiBcIm5wbTppbmhlcml0c0AyLjAuMVwiLFxuICAgICAgXCJwcm9jZXNzXCI6IFwiZ2l0aHViOmpzcG0vbm9kZWxpYnMtcHJvY2Vzc0AwLjEuMlwiXG4gICAgfVxuICB9XG59KTtcbiJdfQ==