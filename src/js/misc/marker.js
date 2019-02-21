class MarkerPainter {
  // inputProperties returns a list of CSS properties that this paint function gets access to
  static get inputProperties () {
    return [
      '--marker-path',
      '--marker-color',
      // '--marker-size',
    ];
  }

  paint (ctx, geom, properties) {
    const { width, height } = geom;
    console.log(this);

    const color1 = properties.get('--marker-color').toString();
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width/3, height);

    // const color2 = properties.get('--marker-path').toString();
    // ctx.fillStyle = color2;
    // ctx.fillRect(width/2, 0, width/2, height);
  }
}

// Register our class under a specific name
registerPaint('marker', MarkerPainter);