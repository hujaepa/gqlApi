const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLSchema } = require('graphql');
const EmpDb = require('./emp.model');

const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  fields: {
    id: { type: GraphQLInt },
    workNum: { type: GraphQLString },
    name: { type: GraphQLString },
    department: { type: GraphQLString },
    address1: { type: GraphQLString },
    address2: { type: GraphQLString },
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    employees: {
      type: new GraphQLList(EmployeeType),
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          EmpDb.getAll((err, rows) => {
            if (err) reject(err);
            else resolve(rows);
          });
        });
      }
    }
  }
});

module.exports = new GraphQLSchema({ query: RootQuery });
