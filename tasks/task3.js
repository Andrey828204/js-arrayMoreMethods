function addSuccessPercent(olympicRepresentation) {
  return olympicRepresentation.map(item => {
    let percent;

    if (item.athletes === 0) {
      percent = '0%';
    } else {
      percent = ((item.medals / item.athletes) * 100).toFixed(1) + '%';
    }

    return {
      ...item,
      percentOfSuccess: percent
    };
  });
}

module.exports = addSuccessPercent;
