"use strict";

////////////////////////////////////////////////////////////////////////////////////////////////////
// start ///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
mapboxgl.accessToken = "pk.eyJ1IjoiZW1pdHJlbW11cyIsImEiOiJjazZrNGdsN2kwMGhsM2tvOTQzdW42ZDZhIn0.ewlKfWnd9GNfKKrMtK-vlQ";
var sidebarWidth = document.querySelector(".map-container .sidebar").clientWidth;
var map = new mapboxgl.Map({
  "container": "map",
  "style": "mapbox://styles/emitremmus/ck5jqevuw0pby1iqqhabzv7dz",
  "maxPitch": 0,
  // "hash": true,
  "bounds": [[-43.650, -23.026], [-43.212, -22.823]],
  // W S E N
  "fitBounds": {
    "padding": {
      "left": sidebarWidth
    }
  }
});
fetch("esgoto.json").then(function (response) {
  return response.json();
}).then(function (geojson) {
  console.log(geojson);
  map.on("load", function () {
    map.addSource("esgoto", {
      "type": "geojson",
      "data": geojson
    });
    map.addLayer({
      "id": "estacoes",
      "type": "circle",
      "source": "esgoto",
      "paint": {
        "circle-radius": 6,
        "circle-color": "#f0a"
      },
      "filter": ["==", "$type", "Point"]
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LmpzIl0sIm5hbWVzIjpbIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJzaWRlYmFyV2lkdGgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGllbnRXaWR0aCIsIm1hcCIsIk1hcCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImdlb2pzb24iLCJjb25zb2xlIiwibG9nIiwib24iLCJhZGRTb3VyY2UiLCJhZGRMYXllciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsUUFBQSxDQUFBQyxXQUFBLEdBQUEsK0ZBQUE7QUFFQSxJQUFBQyxZQUFBLEdBQUFDLFFBQUEsQ0FBQUMsYUFBQSxDQUFBLHlCQUFBLEVBQUFDLFdBQUE7QUFFQSxJQUFBQyxHQUFBLEdBQUEsSUFBQU4sUUFBQSxDQUFBTyxHQUFBLENBQUE7QUFDQSxlQUFBLEtBREE7QUFFQSxXQUFBLHNEQUZBO0FBR0EsY0FBQSxDQUhBO0FBSUE7QUFDQSxZQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLE1BQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxNQUFBLENBQUEsQ0FMQTtBQUtBO0FBQ0EsZUFBQTtBQUNBLGVBQUE7QUFBQSxjQUFBTDtBQUFBO0FBREE7QUFOQSxDQUFBLENBQUE7QUFXQU0sS0FBQSxDQUFBLGFBQUEsQ0FBQSxDQUFBQyxJQUFBLENBQUEsVUFBQUMsUUFBQSxFQUFBO0FBQ0EsU0FBQUEsUUFBQSxDQUFBQyxJQUFBLEVBQUE7QUFDQSxDQUZBLEVBRUFGLElBRkEsQ0FFQSxVQUFBRyxPQUFBLEVBQUE7QUFDQUMsRUFBQUEsT0FBQSxDQUFBQyxHQUFBLENBQUFGLE9BQUE7QUFDQU4sRUFBQUEsR0FBQSxDQUFBUyxFQUFBLENBQUEsTUFBQSxFQUFBLFlBQUE7QUFDQVQsSUFBQUEsR0FBQSxDQUFBVSxTQUFBLENBQUEsUUFBQSxFQUFBO0FBQ0EsY0FBQSxTQURBO0FBRUEsY0FBQUo7QUFGQSxLQUFBO0FBS0FOLElBQUFBLEdBQUEsQ0FBQVcsUUFBQSxDQUFBO0FBQ0EsWUFBQSxVQURBO0FBRUEsY0FBQSxRQUZBO0FBR0EsZ0JBQUEsUUFIQTtBQUlBLGVBQUE7QUFDQSx5QkFBQSxDQURBO0FBRUEsd0JBQUE7QUFGQSxPQUpBO0FBUUEsZ0JBQUEsQ0FBQSxJQUFBLEVBQUEsT0FBQSxFQUFBLE9BQUE7QUFSQSxLQUFBO0FBVUEsR0FoQkE7QUFpQkEsQ0FyQkEiLCJmaWxlIjoiYWd1YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gc3RhcnQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5tYXBib3hnbC5hY2Nlc3NUb2tlbiA9IFwicGsuZXlKMUlqb2laVzFwZEhKbGJXMTFjeUlzSW1FaU9pSmphelpyTkdkc04ya3dNR2hzTTJ0dk9UUXpkVzQyWkRaaEluMC5ld2xLZlduZDlHTmZLS3JNdEstdmxRXCJcclxuXHJcbmNvbnN0IHNpZGViYXJXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFwLWNvbnRhaW5lciAuc2lkZWJhclwiKS5jbGllbnRXaWR0aFxyXG5cclxuY29uc3QgbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XHJcblx0XCJjb250YWluZXJcIjogXCJtYXBcIixcclxuXHRcInN0eWxlXCI6IFwibWFwYm94Oi8vc3R5bGVzL2VtaXRyZW1tdXMvY2s1anFldnV3MHBieTFpcXFoYWJ6djdkelwiLFxyXG5cdFwibWF4UGl0Y2hcIjogMCxcclxuXHQvLyBcImhhc2hcIjogdHJ1ZSxcclxuXHRcImJvdW5kc1wiOiBbIFstNDMuNjUwLCAtMjMuMDI2XSwgWy00My4yMTIsIC0yMi44MjNdIF0sIC8vIFcgUyBFIE5cclxuXHRcImZpdEJvdW5kc1wiOiB7XHJcblx0XHRcInBhZGRpbmdcIjogeyBcImxlZnRcIjogc2lkZWJhcldpZHRoIH1cclxuXHR9XHJcbn0pXHJcblxyXG5mZXRjaChcImVzZ290by5qc29uXCIpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdHJldHVybiByZXNwb25zZS5qc29uKClcclxufSkudGhlbihnZW9qc29uID0+IHtcclxuXHRjb25zb2xlLmxvZyhnZW9qc29uKVxyXG5cdG1hcC5vbihcImxvYWRcIiwgKCkgPT4ge1xyXG5cdFx0bWFwLmFkZFNvdXJjZShcImVzZ290b1wiLCB7XHJcblx0XHRcdFwidHlwZVwiOiBcImdlb2pzb25cIixcclxuXHRcdFx0XCJkYXRhXCI6IGdlb2pzb24sXHJcblx0XHR9KTtcclxuXHJcblx0XHRtYXAuYWRkTGF5ZXIoe1xyXG5cdFx0XHRcImlkXCI6IFwiZXN0YWNvZXNcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiY2lyY2xlXCIsXHJcblx0XHRcdFwic291cmNlXCI6IFwiZXNnb3RvXCIsXHJcblx0XHRcdFwicGFpbnRcIjoge1xyXG5cdFx0XHRcdFwiY2lyY2xlLXJhZGl1c1wiOiA2LFxyXG5cdFx0XHRcdFwiY2lyY2xlLWNvbG9yXCI6IFwiI2YwYVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwiZmlsdGVyXCI6IFtcIj09XCIsIFwiJHR5cGVcIiwgXCJQb2ludFwiXSxcclxuXHRcdH0pXHJcblx0fSlcclxufSlcclxuIl19