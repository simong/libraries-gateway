/**
 * A facet type model
 *
 * @param  {String}   label               The label of the facet type (e.g. format, author...)
 * @param  {Number}   numItems            The amount of items the facet type contains
 * @param  {Facet[]}  facets              Collection of facets matching the specified type
 * @return {Facet}                        The returned facet type object
 */
exports.FacetType = function(label, numItems, facets) {
    var that = {};
    that.label = label;
    that.numItems = numItems;
    that.facets = facets;
    return that;
};

/**
 * A facet model
 *
 * @param  {String}  label                The label of the facet (e.g. book, paper, article...)
 * @param  {Number}  amount               The amount of facets per category
 * @return {Facet}                        The returned facet object
 */
exports.Facet = function(label, amount) {
    var that = {};
    that.label = label;
    that.amount = amount;
    return that;
};
