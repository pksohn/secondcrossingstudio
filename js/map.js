
function initializeMap() {
    var mymap = L.map('mapid').setView([37.8, -122.327816], 12);

    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGtzb2huIiwiYSI6ImNpd21kb3B5bTAwNjQydHA3YnQyZmZodmcifQ.tjx5ega_q5Bt9p3f0k6xaQ', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(mymap);

    mymap.invalidateSize();

    var stationLayer = L.geoJSON(stations, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.Name);
        }
    });

    var bartOneLayer = L.layerGroup([stationLayer, L.geoJSON(bart)]);

    var overlayMaps = {
        "BART 1": bartOneLayer
    };

    // initialize up the L.control.layers
    L.control.layers(null, overlayMaps).addTo(mymap);
}


window.setTimeout(function () {

    initializeMap();


}, 1000);




var stations = {
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },

    "features": [
        { "type": "Feature", "properties": { "X": -122.433081, "Y": 37.784604, "Alt_ID": "2", "Name": "Fillmore", "CrossSts": "Fillmore and Geary" }, "geometry": { "type": "Point", "coordinates": [-122.432049014052183, 37.7844757834484] } },
        { "type": "Feature", "properties": { "X": -122.421647, "Y": 37.785524, "Alt_ID": "2", "Name": "Van Ness", "CrossSts": "Van Ness and Geary" }, "geometry": { "type": "Point", "coordinates": [-122.420836532216967, 37.785784771819287] } },
        { "type": "Feature", "properties": { "X": -122.255850, "Y": 37.794423, "Alt_ID": "2", "Name": "Eastlake", "CrossSts": null }, "geometry": { "type": "Point", "coordinates": [-122.254418987657999, 37.794597431611635] } },
        { "type": "Feature", "properties": { "X": -122.294181, "Y": 37.780573, "Alt_ID": "2", "Name": "Alameda", "CrossSts": null }, "geometry": { "type": "Point", "coordinates": [-122.293345669566776, 37.780286119484778] } },
        { "type": "Feature", "properties": { "X": -122.277152, "Y": 37.806864, "Alt_ID": "2", "Name": "14th Street", "CrossSts": null }, "geometry": { "type": "Point", "coordinates": [-122.277251804637885, 37.80738272091007] } },
        { "type": "Feature", "properties": { "X": -122.271412, "Y": 37.801819, "Alt_ID": "2", "Name": "11th Street", "CrossSts": null }, "geometry": { "type": "Point", "coordinates": [-122.272224663534331, 37.802161866127314] } },
        { "type": "Feature", "properties": { "X": -122.282372, "Y": 37.797111, "Alt_ID": "2", "Name": "Howard Terminal", "CrossSts": null }, "geometry": { "type": "Point", "coordinates": [-122.282376867979409, 37.798298524605784] } },
        { "type": "Feature", "properties": { "X": -122.395365, "Y": 37.779278, "Alt_ID": "2", "Name": "4th\/Brannan", "CrossSts": null }, "geometry": { "type": "Point", "coordinates": [-122.395365189894576, 37.779278226548605] } },
        { "type": "Feature", "properties": { "X": -122.401849, "Y": 37.774142, "Alt_ID": "2", "Name": "6th\/Brannan", "CrossSts": null }, "geometry": { "type": "Point", "coordinates": [-122.401849454060525, 37.774141947607539] } },
        { "type": "Feature", "properties": { "X": -122.411634, "Y": 37.776255, "Alt_ID": "2", "Name": "Howard", "CrossSts": null }, "geometry": { "type": "Point", "coordinates": [-122.41163393724436, 37.776254954370017] } },
        { "type": "Feature", "properties": { "X": -122.415320, "Y": 37.780746, "Alt_ID": "2", "Name": "Hyde", "CrossSts": null }, "geometry": { "type": "Point", "coordinates": [-122.415320230897137, 37.78074577033329] } }
    ]
};

var bart = {
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },

    "features": [
        { "type": "Feature", "properties": { "Existing": null, "Operator": null, "Alt": "SF3", "Approach": "San Francisco", "Dist": 3.643776 }, "geometry": { "type": "LineString", "coordinates": [[-122.332310336372913, 37.782111578901123], [-122.383847426689314, 37.785736757838407], [-122.385264579856695, 37.785909724763314], [-122.386307889107343, 37.785882050665499], [-122.387061062298415, 37.785621068040371], [-122.387689066879673, 37.785359430154195], [-122.395365189894576, 37.779278226548605]] } },
        { "type": "Feature", "properties": { "Existing": null, "Operator": null, "Alt": "EB2", "Approach": "East Bay", "Dist": 1.641941 }, "geometry": { "type": "LineString", "coordinates": [[-122.266950816149617, 37.829374465251611], [-122.270904886516988, 37.815013018581269], [-122.2716850657458, 37.814128728294328], [-122.272799384826811, 37.812865662562189], [-122.274755912999666, 37.811053432302273], [-122.276995012267477, 37.807348791850899]] } },
        { "type": "Feature", "properties": { "Existing": null, "Operator": null, "Alt": "EB2", "Approach": "East Bay", "Dist": 1.051789 }, "geometry": { "type": "LineString", "coordinates": [[-122.254418987657999, 37.794597431611635], [-122.256319875872776, 37.796277160945074], [-122.259894080064939, 37.797509780395565], [-122.271131817057423, 37.801823921904983]] } },
        { "type": "Feature", "properties": { "Existing": null, "Operator": null, "Alt": "EB2", "Approach": "East Bay", "Dist": 2.127589 }, "geometry": { "type": "LineString", "coordinates": [[-122.224869864587433, 37.774803174462711], [-122.228019986132409, 37.776756695347132], [-122.231185943114653, 37.778541696787677], [-122.233993638758193, 37.780738884491875], [-122.239600997540322, 37.784233957480659], [-122.246856463081954, 37.787913717363168], [-122.254418987657999, 37.794597431611635]] } },
        { "type": "Feature", "properties": { "Existing": null, "Operator": null, "Alt": "EB2", "Approach": "East Bay", "Dist": 0.312671 }, "geometry": { "type": "LineString", "coordinates": [[-122.276995012267477, 37.807348791850899], [-122.279466354984123, 37.803259410318745]] } },
        { "type": "Feature", "properties": { "Existing": null, "Operator": null, "Alt": "EB2", "Approach": "East Bay", "Dist": 0.377286 }, "geometry": { "type": "LineString", "coordinates": [[-122.279466354984123, 37.803259410318745], [-122.279639222531557, 37.802973343635934], [-122.281102948418493, 37.800506209215833], [-122.281899245080567, 37.799164410488558], [-122.282376867979409, 37.798298524605784]] } },
        { "type": "Feature", "properties": { "Existing": null, "Operator": null, "Alt": "EB2", "Approach": "East Bay", "Dist": 1.452766 }, "geometry": { "type": "LineString", "coordinates": [[-122.282376867979409, 37.798298524605784], [-122.282895826660535, 37.79735767513975], [-122.284034520884575, 37.796241513630235], [-122.284494718914317, 37.7952991679417], [-122.285547988943435, 37.7943584240912], [-122.287176090144868, 37.792955647833899], [-122.288882956250916, 37.791970731025692], [-122.28969656750202, 37.791149437201454], [-122.290425209453517, 37.790371644012978], [-122.29094077328152, 37.789249166100973], [-122.291093403998431, 37.785854259987559], [-122.291325956701485, 37.78219627694552], [-122.291529139358545, 37.781420579536999], [-122.292252376816876, 37.780855185132374], [-122.292995140482773, 37.780523935993578], [-122.293266246751344, 37.780535644687987]] } },
        { "type": "Feature", "properties": { "Existing": null, "Operator": null, "Alt": "EB2", "Approach": "East Bay", "Dist": 2.149761 }, "geometry": { "type": "LineString", "coordinates": [[-122.293266246751344, 37.780535644687987], [-122.332496202395689, 37.782223320011823]] } },
        { "type": "Feature", "properties": { "Existing": null, "Operator": null, "Alt": "SF3", "Approach": "San Francisco", "Dist": 0.501293 }, "geometry": { "type": "LineString", "coordinates": [[-122.395365189894576, 37.779278226548605], [-122.4015209839081, 37.774400369270715], [-122.401849454060525, 37.774141947607539]] } },
        { "type": "Feature", "properties": { "Existing": null, "Operator": null, "Alt": "SF3", "Approach": "San Francisco", "Dist": 0.686670 }, "geometry": { "type": "LineString", "coordinates": [[-122.401849454060525, 37.774141947607539], [-122.403274247651538, 37.773020969138628], [-122.40389518548308, 37.772702968617288], [-122.404509689195862, 37.772499796666125], [-122.404988324539389, 37.772380593354718], [-122.405448704348572, 37.772289912720517], [-122.405930698303763, 37.772313806199023], [-122.406403853560292, 37.772378591015404], [-122.4069386408909, 37.772548052952246], [-122.41163393724436, 37.776254954370017]] } },
        { "type": "Feature", "properties": { "Existing": null, "Operator": null, "Alt": "SF3", "Approach": "San Francisco", "Dist": 0.385618 }, "geometry": { "type": "LineString", "coordinates": [[-122.41163393724436, 37.776254954370017], [-122.41436669796731, 37.778412192729689], [-122.414811942205802, 37.778764675716964], [-122.415047617849766, 37.779194191438208], [-122.415320230897137, 37.78074577033329]] } },
        { "type": "Feature", "properties": { "Existing": null, "Operator": null, "Alt": "SF3", "Approach": "San Francisco", "Dist": 0.597239 }, "geometry": { "type": "LineString", "coordinates": [[-122.415320230897137, 37.78074577033329], [-122.416172759107226, 37.78507643122056], [-122.416320708708014, 37.785478433717095], [-122.416510833792643, 37.785756003380897], [-122.416881842470005, 37.785958156918241], [-122.41733667473396, 37.786086387104056], [-122.418057951673603, 37.786123978840074], [-122.420836532216967, 37.785784771819294]] } },
        { "type": "Feature", "properties": { "Existing": null, "Operator": null, "Alt": "SF3", "Approach": "San Francisco", "Dist": 0.684528 }, "geometry": { "type": "LineString", "coordinates": [[-122.420836532216967, 37.785784771819294], [-122.424510260844073, 37.785336180244748], [-122.433214502074833, 37.78434272156381]] } },
        { "type": "Feature", "properties": { "Existing": null, "Operator": null, "Alt": "EB2", "Approach": "East Bay", "Dist": 0.495045 }, "geometry": { "type": "LineString", "coordinates": [[-122.271131817057423, 37.801823921904983], [-122.276690764309777, 37.80395740914085], [-122.278003569927563, 37.804013930632216], [-122.278586684557695, 37.803726694152793], [-122.279293136683705, 37.803319039005189]] } }
    ]
};