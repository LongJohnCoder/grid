// @ts-nocheck
import {
  getEstimatedTotalWidth,
  getEstimatedTotalHeight,
  getBoundedCells,
  cellIdentifier,
  extendAreaToMergedCells,
  areaIntersects
} from "../helpers";

describe("getBoundedCells", () => {
  it("returns empty for undefined area", () => {
    const cells = getBoundedCells(undefined);
    expect(cells.size).toBe(0);
  });

  it("returns accurate top, left, right and bottom indexs", () => {
    const cells = getBoundedCells({
      top: 1,
      right: 5,
      left: 1,
      bottom: 5
    });
    expect(cells.has(cellIdentifier(1, 1))).toBeTruthy();
    expect(cells.has(cellIdentifier(5, 5))).toBeTruthy();
  });
});

describe("getEstimatedTotalWidth", () => {
  it("returns estimated width during initial load", () => {
    const columnCount = 200;
    const instanceProps = {
      lastMeasuredColumnIndex: -1,
      columnMetadataMap: {},
      estimatedColumnWidth: 30
    };

    expect(getEstimatedTotalWidth(columnCount, instanceProps)).toBe(6000);
  });

  it("returns correct width", () => {
    const columnCount = 200;
    const instanceProps = {
      lastMeasuredColumnIndex: 1,
      columnMetadataMap: {
        0: {
          offset: 0,
          size: 20
        },
        1: {
          offset: 20,
          size: 70
        }
      },
      estimatedColumnWidth: 30
    };

    expect(getEstimatedTotalWidth(columnCount, instanceProps)).toBe(6030);
  });
});

describe("getEstimatedTotalHeight", () => {
  it("returns estimated height during initial load", () => {
    const rowCount = 200;
    const instanceProps = {
      lastMeasuredRowIndex: -1,
      rowMetadataMap: {},
      estimatedRowHeight: 30
    };

    expect(getEstimatedTotalHeight(rowCount, instanceProps)).toBe(6000);
  });

  it("returns correct height after load", () => {
    const rowCount = 200;
    const instanceProps = {
      lastMeasuredRowIndex: 0,
      rowMetadataMap: {
        0: {
          offset: 0,
          size: 20
        },
        1: {
          offset: 20,
          size: 70
        }
      },
      estimatedRowHeight: 30
    };

    expect(getEstimatedTotalHeight(rowCount, instanceProps)).toBe(5990);
  });
});

describe("extendAreaToMergedCells", () => {
  it("expands to merged cells", () => {
    const mergedCells = [
      {
        top: 2,
        left: 2,
        right: 5,
        bottom: 5
      }
    ];
    const originalArea = {
      top: 2,
      left: 1,
      bottom: 2,
      right: 3
    };
    const area = extendAreaToMergedCells(originalArea, mergedCells);
    expect(area.bottom).toBe(5);
    expect(area.right).toBe(5);
  });
});

describe("areaIntersects", () => {
  it("checks if two areas intersects", () => {
    const area1 = {
      top: 2,
      left: 1,
      right: 3,
      bottom: 4
    };
    const area2 = {
      top: 5,
      left: 2,
      bottom: 3,
      right: 2
    };

    expect(areaIntersects(area1, area2)).toBeFalsy();
  });
  it("returns true for intersecting area", () => {
    const area1 = {
      top: 2,
      left: 1,
      right: 3,
      bottom: 4
    };
    const area2 = {
      top: 2,
      left: 2,
      bottom: 3,
      right: 2
    };

    expect(areaIntersects(area1, area2)).toBeTruthy();
  });
});
