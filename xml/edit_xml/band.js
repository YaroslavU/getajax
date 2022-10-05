var fs = require("fs"),
  parseString = require("xml2js").parseString,
  xml2js = require("xml2js");

fs.readFile("band.xml", "utf-8", function(err, data) {
  if (err) console.log(err);
  console.log(data);
  parseString(data, function(err, result) {
    if (err) console.log(err);
    console.log(result);
     
    var json = result;
    var tr = [
      { track: "Combustion" },
      { track: ["I Am Colossus", "The Demon's Name Is Surveillance"] },
      { track: ["Clockworks", "Born in Dissonance", "MonstroCity"] },
      { track: ["Broken Cog", "The Abysmal Eye", "Light the Shortening Fuse", "Phantoms"] }
    ]
    for (var i = 0; i < 4; i++){
      json.band.meshuggah[0].album[i].tracks = tr[i];
    }
    
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(json);

    fs.writeFile("band.xml", xml, function(err, data) {
      if (err) console.log(err);

      console.log("successfully written our update xml to file");
    });
  });
});