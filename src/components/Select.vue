filteredPeople: function() {
      var vm = this;
      var selectedClub = vm.selected;
      if(selectedClub === "All") {
        //save performance, juste return the default array:
        return this.tableRow;
      } else {
        return this.tableRow.filter(function(player) {
          //return the array after passimng it through the filter function:
          return  (selectedClub === 'All' || (player[7] + ", " + player[8]) === selectedClub);   

        });
      }
    },
    totalPages: function() {
      return Math.ceil(this.resultCount / this.itemsPerPage)
    },



     function filtering() {
          var vm = this;
          var selectedClub = vm.selected;
          var filteredData = this.tableRow;
          if(selectedClub === "All") {
            //save performance, juste return the default array:
            return filteredData;
          } else {
          return filteredData.filter(function(player) {
            //return the array after passimng it through the filter function:
            return  (selectedClub === 'All' || (player[7] + ", " + player[8]) === selectedClub);   

          });
        }
        var ff = filtering();