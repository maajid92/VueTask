new Vue({
  //
  el: '#app',
  //
  data: {
    name: '',
    course: '',
    acceptancePeriod: '',
    defaultLastId: 3,
    students: [
      { id: 1, name: '', course: '', acceptancePeriod: '' },
      { id: 2, name: '', course: '', acceptancePeriod: '' },
      { id: 3, name: '', course: '', acceptancePeriod: '' }
    ]
  },
  methods: {
    addStudent: function() {
      var lastStudentPosition = this.students.length - 1;
              let id = this.students[lastStudentPosition].id + 1;
              let name = this.name
              let course = this.course
              let acceptancePeriod = this.acceptancePeriod
              this.students.push({ id,name, course, acceptancePeriod })
    }
  }
})
