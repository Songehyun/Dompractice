function tagMaker(tagName, attributes = {}, children = "") {
  const attrsToString = (attrs) => {
    const attrsArray = Object.entries(attrs);
    const attrsString = attrsArray.map(function (attr) {
      return attr[0] + '="' + attr[1] + '"';
    });
    return attrsString.join(" ");
  };

  const attrsString = attrsToString(attributes);

  let childrenString;
  if (Array.isArray(children)) {
    childrenString = children.join("");
  } else {
    childrenString = children;
  }

  if (attrsString) {
    return `<${tagName} ${attrsString}>${childrenString}</${tagName}>`;
  } else {
    return `<${tagName}>${childrenString}<${tagName}>`;
  }
}

console.log(
  tagMaker("div", { class: "container", id: "root" }, [
    tagMaker("h1", {}, "컴포넌트의 힘"),
    tagMaker("p", {}, "우월한 함수의 능력"),
  ])
);
