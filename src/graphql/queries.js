/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = `query GetNote($id: ID!) {
  getNote(id: $id) {
    id
    description
    createdAt
    username
  }
}
`;
export const listNotes = `query ListNotes(
  $filter: ModelNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      createdAt
      username
    }
    nextToken
  }
}
`;
export const notesByUserName = `query NotesByUserName(
  $username: String
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  notesByUserName(
    username: $username
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      description
      createdAt
      username
    }
    nextToken
  }
}
`;
