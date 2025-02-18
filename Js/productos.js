
    $(document).ready(function () {
      $(".filter-btn").click(function () {
        var category = $(this).attr("data-category");

        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

        if (category === "todos") {
          $(".product-item").show();
        } else {
          $(".product-item")
            .hide()
            .filter("[data-category='" + category + "']")
            .show();
        }
      });
    });

    $(document).ready(function () {
      var itemsPerPage = 10; // Máximo 10 productos por página
      var $products = $(".products-grid .product-item");
      var totalItems = $products.length;
      var totalPages = Math.ceil(totalItems / itemsPerPage);

      // Función para mostrar una página determinada
      function showPage(page) {
        // Esconder todos los productos
        $products.hide();
        // Calcular el índice inicial y final de los items para la página actual
        var start = (page - 1) * itemsPerPage;
        var end = start + itemsPerPage;
        // Mostrar los productos correspondientes a la página
        $products.slice(start, end).show();
      }

      // Función para generar los botones de paginación
      function createPagination() {
        var $pagination = $("#pagination");
        $pagination.empty();

        for (var i = 1; i <= totalPages; i++) {
          $pagination.append(
            "<li class='page-item'><a href='#' class='page-link'>" +
              i +
              "</a></li>"
          );
        }

        // Marcar la primera página como activa
        $pagination.find("li").first().addClass("active");
      }

      // Mostrar la primera página al cargar
      createPagination();
      showPage(1);

      // Manejar el click en los enlaces de paginación
      $("#pagination").on("click", "a", function (e) {
        e.preventDefault();
        var pageNum = parseInt($(this).text());

        // Cambiar la clase 'active'
        $("#pagination li").removeClass("active");
        $(this).parent().addClass("active");

        // Mostrar la página seleccionada
        showPage(pageNum);
      });

      // Si estás usando el filtro, recuerda reiniciar la paginación cuando se aplique
      $(".filter-btn").click(function () {
        // Después de filtrar, recalcula los productos visibles
        var $visibleProducts = $(".products-grid .product-item:visible");
        totalItems = $visibleProducts.length;
        totalPages = Math.ceil(totalItems / itemsPerPage);
        createPagination();
        showPage(1);
      });
    });
