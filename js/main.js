fetch('../data/states-albers-10m.json')
  .then(async res => res.json())
  .then(us => {
    const width = 975;
    const height = 610;

    const projection = d3.geoAlbersUsa().scale(1300).translate(width / 2, height / 2);

    const g_parakeet_data = [
      [73],
      [74],
      [75],
      [76]
    ]
    
    const path = d3.geoPath();
    
    const svg = d3.create('svg')
      .attr('height', height)
      .attr('width', width);

    let legend = d3.select('#parakeet-legend')
    
    legend.append("circle").attr("cx",100).attr("cy",136).attr("r", 6).style("fill", "#ffea00")
    legend.append("circle").attr("cx",230).attr("cy",136).attr("r", 6).style("fill", "#32a852")
    legend.append("circle").attr("cx",360).attr("cy",136).attr("r", 6).style("fill", "#eb4034")
    legend.append("text").attr("x", 110).attr("y", 130).text("Monk Parakeet").style("font-size", "15px").attr("alignment-baseline", "hanging")
    legend.append("text").attr("x", 240).attr("y", 130).text("Green Parakeet").style("font-size", "15px").attr("alignment-baseline","hanging")
    legend.append("text").attr("x", 370).attr("y", 130).text("Red Faced Parakeet").style("font-size", "15px").attr("alignment-baseline","hanging")
    
    const statesBackground = svg.append('path')
      .attr('fill', '#ddd')
      .attr('d', path(topojson.feature(us, us.objects.nation)))
    
    const statesBorder = svg.append('path')
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('d', path(topojson.mesh(us, us.objects.states, (a, b) => a !== b )))
    
    const m_parakeet_range = svg.append('path')
      .attr('fill', '#ffea00')
      .attr('d', path(topojson.feature(us, us.objects.states.geometries.find(el => el.properties.name === 'New Mexico'))));
    const m_parakeet_range_2 = svg.append('path')
      .attr('fill', '#ffea00')
      .attr('d', path(topojson.feature(us, us.objects.states.geometries.find(el => el.properties.name === 'Arizona'))));
    
    const g_parakeet_range = svg.append('path')
      .attr('fill', '#32a852')
      .attr('d', path(topojson.feature(us, us.objects.states.geometries.find(el => el.properties.name === 'Texas'))));
    const g_parakeet_range_2 = svg.append('path')
      .attr('fill', '#32a852')
      .attr('d', path(topojson.feature(us, us.objects.states.geometries.find(el => el.properties.name === 'Florida'))));
    const g_parakeet_range_3 = svg.append('path')
      .attr('fill', '#32a852')
      .attr('d', path(topojson.feature(us, us.objects.states.geometries.find(el => el.properties.name === 'New Hampshire'))));

    const rm_parakeet_range = svg.append('path')
      .attr('fill', '#eb4034')
      .attr('d', path(topojson.feature(us, us.objects.states.geometries.find(el => el.properties.name === 'California'))));
    const rm_parakeet_range_2 = svg.append('path')
      .attr('fill', '#eb4034')
      .attr('d', path(topojson.feature(us, us.objects.states.geometries.find(el => el.properties.name === 'New York'))));
    const rm_parakeet_range_3 = svg.append('path')
      .attr('fill', '#eb4034')
      .attr('d', path(topojson.feature(us, us.objects.states.geometries.find(el => el.properties.name === 'Illinois'))));

    const mapBody = document.getElementById('parakeet-map');
    mapBody.appendChild(svg.node());
    
  })

// #32a852