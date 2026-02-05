const i18n = {
  en: {
    brand: 'Linear Algebra Compass',
    brand_sub: 'Learn concepts. Recall ideas. Connect the map.',
    hero_title: 'Your bilingual linear algebra companion',
    hero_body:
      'English is primary, Chinese is here to bridge intuition. Explore the knowledge map, trigger recall, and keep a personal notebook — no drill problems, just concept clarity.',
    hero_cta: "Shuffle today's recall",
    daily_title: 'Daily recall',
    map_title: 'Knowledge map',
    map_body: 'A curated list of concepts. Click a card to open a structured deep dive.',
    recall_title: 'Quick recall cards',
    recall_body: 'Tap to flip. Use these when you want to refresh a concept in 60 seconds.',
    formula_title: 'Core formulas & definitions',
    formula_body: 'Short, practical statements that build intuition and memory.',
    connections_title: 'Concept connections',
    connections_body: 'See how topics lean on each other. Use this to choose what to review next.',
    plan_title: 'Study flow',
    plan_body: 'A lightweight rhythm you can repeat each week.',
    notes_title: 'My linear algebra notebook',
    notes_body: 'Write your own summaries or mental images. Everything stays in your browser.',
    footer: 'Made for calm, focused learning. Update the topics as your course evolves.',
    notes_placeholder: 'Write your notes here...',
    recall_tag: 'Recall',
    tap_to_flip: 'Tap to flip',
    app_back: 'Back to study flow',
    app_eyebrow: 'Application room',
    app_title: 'Connect ideas to the real world',
    app_body:
      'Pick one case, read the linear algebra lens, and write a two-sentence bridge. These are memory anchors, not exercises.',
    app_bridge_title: 'Bridge checklist',
    app_booster_title: 'Learning boosters',
    app_pitfall_title: 'Common pitfalls',
    app_prompt_title: 'Mini prompts',
    map_open: 'Open deep dive',
    topic_back: 'Back to map',
    topic_eyebrow: 'Topic deep dive',
    topic_core_title: 'Core ideas',
    topic_formula_title: 'Key formulas',
    topic_pitfall_title: 'Common pitfalls',
    topic_checklist_title: 'Self-check',
    topic_next_title: 'Next to review',
    topics: [
      {
        tag: 'Foundations',
        title: 'Vectors & geometry',
        body: 'Magnitude, direction, span, and how dot products reveal angles.',
        focus: 'Recall: what does the dot product measure geometrically?'
      },
      {
        tag: 'Systems',
        title: 'Linear systems',
        body: 'Row operations, pivots, and when a system is consistent.',
        focus: 'Recall: what does a pivot column tell you about solutions?'
      },
      {
        tag: 'Structure',
        title: 'Vector spaces',
        body: 'Subspaces, span, basis, and the meaning of dimension.',
        focus: 'Recall: what makes a set a basis?'
      },
      {
        tag: 'Maps',
        title: 'Linear transformations',
        body: 'Matrices as functions that preserve linear combinations.',
        focus: 'Recall: how does a matrix transform a basis?'
      },
      {
        tag: 'Determinants',
        title: 'Determinants',
        body: 'Area/volume scaling and invertibility in one number.',
        focus: 'Recall: what does det(A)=0 mean geometrically?'
      },
      {
        tag: 'Spectral',
        title: 'Eigenvalues & eigenvectors',
        body: 'Directions that stay on their own line after transformation.',
        focus: 'Recall: why do eigenvectors matter in dynamics?'
      },
      {
        tag: 'Orthogonality',
        title: 'Orthogonality & projections',
        body: 'Decompose vectors into perpendicular pieces for clarity.',
        focus: 'Recall: what is the geometric meaning of a projection?'
      },
      {
        tag: 'Decompositions',
        title: 'Matrix factorizations',
        body: 'LU, QR, SVD as lenses for computation and insight.',
        focus: 'Recall: what does SVD tell you about a matrix?'
      },
      {
        tag: 'Approximation',
        title: 'Least squares',
        body: 'Best-fit solutions when exact ones do not exist.',
        focus: 'Recall: why is the error orthogonal to the column space?'
      },
      {
        tag: 'Applications',
        title: 'Data & signals',
        body: 'PCA, compression, and stability through linear structure.',
        focus: 'Recall: how does PCA use eigenvectors?'
      }
    ],
    topic_details: [
      {
        summary: 'Treat vectors as geometric objects and as coordinates under a chosen basis.',
        core: [
          {
            title: 'Geometry vs coordinates',
            body: 'A vector is an abstract object; coordinates depend on the basis.'
          },
          {
            title: 'Span and linear combination',
            body: 'Span tells you which directions can be generated from your set.'
          },
          {
            title: 'Dot product intuition',
            body: 'Dot product captures alignment, angle, and projection strength.'
          }
        ],
        formulas: [
          {
            title: 'Norm',
            body: '||v|| = sqrt(v · v)'
          },
          {
            title: 'Angle',
            body: 'cos(theta) = (a · b) / (||a|| ||b||)'
          },
          {
            title: 'Projection',
            body: 'proj_u(v) = ((v · u) / (u · u)) u'
          }
        ],
        pitfalls: [
          {
            title: 'Vector vs point',
            body: 'A point is a location; a vector is displacement/direction.'
          },
          {
            title: 'Forgetting basis dependence',
            body: 'Coordinate numbers change when basis changes.'
          },
          {
            title: 'Ignoring units',
            body: 'Dot products only make sense with consistent units and space.'
          }
        ],
        checklist: [
          {
            title: '60s check',
            body: 'Can you explain dot product geometrically without formulas?'
          },
          {
            title: 'Mini example',
            body: 'Can you tell if two vectors are orthogonal from their dot product?'
          },
          {
            title: 'Bridge sentence',
            body: '“Basis changes coordinates, not the underlying vector.”'
          }
        ],
        next: ['Linear systems', 'Vector spaces', 'Orthogonality']
      },
      {
        summary: 'Solve Ax=b through row operations, pivots, and consistency conditions.',
        core: [
          {
            title: 'Pivot structure',
            body: 'Pivot columns indicate constrained variables and rank.'
          },
          {
            title: 'Consistency',
            body: 'System is consistent when b lies in the column space of A.'
          },
          {
            title: 'Solution set shape',
            body: 'Free variables create affine families of solutions.'
          }
        ],
        formulas: [
          {
            title: 'Consistency condition',
            body: 'No row of form [0 ... 0 | nonzero] in RREF.'
          },
          {
            title: 'General solution',
            body: 'x = x_p + x_n where x_n is from null(A).'
          },
          {
            title: 'Rank relation',
            body: 'rank(A) = number of pivots in A.'
          }
        ],
        pitfalls: [
          {
            title: 'Row/column confusion',
            body: 'Row operations preserve solution set, not original columns.'
          },
          {
            title: 'Unique vs infinite',
            body: 'Consistency alone does not imply uniqueness.'
          },
          {
            title: 'Skipping augmented matrix',
            body: 'Always track b during elimination.'
          }
        ],
        checklist: [
          {
            title: '60s check',
            body: 'Can you identify free variables directly from RREF?'
          },
          {
            title: 'Mini example',
            body: 'Can you detect inconsistency from one contradictory row?'
          },
          {
            title: 'Bridge sentence',
            body: '“Pivot pattern explains existence and uniqueness together.”'
          }
        ],
        next: ['Vector spaces', 'Rank-nullity', 'Least squares']
      },
      {
        summary: 'Understand subspace, basis, and dimension as the structural language of linear algebra.',
        core: [
          {
            title: 'Subspace test',
            body: 'Check closure under addition and scalar multiplication.'
          },
          {
            title: 'Basis meaning',
            body: 'Basis is both spanning and linearly independent.'
          },
          {
            title: 'Dimension insight',
            body: 'Dimension measures degrees of freedom.'
          }
        ],
        formulas: [
          {
            title: 'Span',
            body: 'span(v1,...,vk) = {a1 v1 + ... + ak vk}'
          },
          {
            title: 'Rank-nullity',
            body: 'rank(A) + nullity(A) = number of columns.'
          },
          {
            title: 'Coordinate map',
            body: '[x]_B gives coordinates of x in basis B.'
          }
        ],
        pitfalls: [
          {
            title: 'Independent but not spanning',
            body: 'Both properties are required for a basis.'
          },
          {
            title: 'Dimension mismatch',
            body: 'Do not compare dimensions from different spaces.'
          },
          {
            title: 'Ignoring ambient space',
            body: 'Subspace is always relative to a parent space.'
          }
        ],
        checklist: [
          {
            title: '60s check',
            body: 'Can you define basis without using symbols?'
          },
          {
            title: 'Mini example',
            body: 'Can you remove a redundant vector and keep the same span?'
          },
          {
            title: 'Bridge sentence',
            body: '“Dimension tells how many independent directions exist.”'
          }
        ],
        next: ['Linear transformations', 'Orthogonality', 'Eigenvalues']
      },
      {
        summary: 'See matrices as linear maps that move basis vectors and preserve linear combination.',
        core: [
          {
            title: 'Linearity rules',
            body: 'T(ax + by) = aT(x) + bT(y) defines linear transformations.'
          },
          {
            title: 'Columns as images',
            body: 'Columns of A are images of standard basis vectors.'
          },
          {
            title: 'Composition',
            body: 'Matrix multiplication represents composition of maps.'
          }
        ],
        formulas: [
          {
            title: 'Standard matrix',
            body: 'T(x) = Ax'
          },
          {
            title: 'Composition',
            body: '(S o T)(x) = S(T(x)) corresponds to BA.'
          },
          {
            title: 'Kernel/image',
            body: 'ker(T) and im(T) summarize map behavior.'
          }
        ],
        pitfalls: [
          {
            title: 'Order mistakes',
            body: 'BA means T first, then S if x maps by A then B.'
          },
          {
            title: 'Treating nonlinear maps as linear',
            body: 'Offsets break linearity.'
          },
          {
            title: 'No geometry translation',
            body: 'Always state what happens to lines, planes, and volumes.'
          }
        ],
        checklist: [
          {
            title: '60s check',
            body: 'Can you describe a matrix by what it does to basis vectors?'
          },
          {
            title: 'Mini example',
            body: 'Can you predict image of a vector from column combination?'
          },
          {
            title: 'Bridge sentence',
            body: '“A matrix is a function with geometric action.”'
          }
        ],
        next: ['Determinants', 'Eigenvalues & eigenvectors', 'Matrix factorizations']
      },
      {
        summary: 'Use determinant as orientation and volume scaling indicator tied to invertibility.',
        core: [
          {
            title: 'Volume scaling',
            body: '|det(A)| gives area/volume scaling factor.'
          },
          {
            title: 'Orientation',
            body: 'Sign of determinant indicates orientation flip.'
          },
          {
            title: 'Invertibility link',
            body: 'det(A)=0 means collapsed dimension and non-invertibility.'
          }
        ],
        formulas: [
          {
            title: 'Multiplicative',
            body: 'det(AB) = det(A)det(B)'
          },
          {
            title: 'Transpose',
            body: 'det(A^T) = det(A)'
          },
          {
            title: 'Triangular',
            body: 'det(A) = product of diagonal entries.'
          }
        ],
        pitfalls: [
          {
            title: 'Overusing determinant',
            body: 'Determinant is not efficient for solving large systems.'
          },
          {
            title: 'Absolute value confusion',
            body: 'Sign matters for orientation, magnitude for scaling.'
          },
          {
            title: 'Applying to non-square matrices',
            body: 'Determinant is defined only for square matrices.'
          }
        ],
        checklist: [
          {
            title: '60s check',
            body: 'Can you interpret det=0 without algebra steps?'
          },
          {
            title: 'Mini example',
            body: 'Can you predict effect of swapping two rows on determinant?'
          },
          {
            title: 'Bridge sentence',
            body: '“Determinant compresses geometry into one scalar.”'
          }
        ],
        next: ['Eigenvalues & eigenvectors', 'Least squares', 'Data & signals']
      },
      {
        summary: 'Analyze invariant directions and growth factors through eigenpairs.',
        core: [
          {
            title: 'Invariant directions',
            body: 'Eigenvectors keep direction under transformation.'
          },
          {
            title: 'Scaling factors',
            body: 'Eigenvalues describe stretching/compressing along eigenvectors.'
          },
          {
            title: 'Diagonalization',
            body: 'If enough eigenvectors exist, powers of A become easier.'
          }
        ],
        formulas: [
          {
            title: 'Eigen equation',
            body: 'Av = lambda v, v != 0'
          },
          {
            title: 'Characteristic equation',
            body: 'det(A - lambda I) = 0'
          },
          {
            title: 'Diagonalization',
            body: 'A = PDP^{-1} when eigenbasis exists.'
          }
        ],
        pitfalls: [
          {
            title: 'Assuming always diagonalizable',
            body: 'Some matrices lack enough independent eigenvectors.'
          },
          {
            title: 'Confusing algebraic/geometric multiplicity',
            body: 'These counts can differ.'
          },
          {
            title: 'Ignoring complex eigenvalues',
            body: 'Real matrices may still have complex eigenvalues.'
          }
        ],
        checklist: [
          {
            title: '60s check',
            body: 'Can you explain why eigenvectors matter for repeated A^k x?'
          },
          {
            title: 'Mini example',
            body: 'Can you classify stable/unstable mode from eigenvalue magnitude?'
          },
          {
            title: 'Bridge sentence',
            body: '“Eigenvectors expose the natural axes of the map.”'
          }
        ],
        next: ['Matrix factorizations', 'Data & signals', 'Applications room']
      },
      {
        summary: 'Use orthogonality to simplify coordinates, projections, and error analysis.',
        core: [
          {
            title: 'Orthogonal decomposition',
            body: 'Split vectors into perpendicular components.'
          },
          {
            title: 'Projection geometry',
            body: 'Projection picks closest point in a subspace.'
          },
          {
            title: 'Orthonormal basis',
            body: 'Makes coefficients equal to simple dot products.'
          }
        ],
        formulas: [
          {
            title: 'Projection',
            body: 'proj_u(v) = ((v · u)/(u · u))u'
          },
          {
            title: 'Orthonormal expansion',
            body: 'v = sum((v · qi)qi)'
          },
          {
            title: 'Orthogonal matrix',
            body: 'Q^TQ = I'
          }
        ],
        pitfalls: [
          {
            title: 'Not normalizing vectors',
            body: 'Orthonormal basis requires unit length.'
          },
          {
            title: 'Projection direction mistakes',
            body: 'Project onto subspace, not onto normal vector unless intended.'
          },
          {
            title: 'Forgetting closest-point meaning',
            body: 'Projection solves a distance minimization problem.'
          }
        ],
        checklist: [
          {
            title: '60s check',
            body: 'Can you describe projection as closest-point argument?'
          },
          {
            title: 'Mini example',
            body: 'Can you compute one projection with dot products only?'
          },
          {
            title: 'Bridge sentence',
            body: '“Orthogonality turns geometry into clean arithmetic.”'
          }
        ],
        next: ['Least squares', 'Matrix factorizations', 'Data & signals']
      },
      {
        summary: 'Choose LU, QR, or SVD based on problem type and numerical goal.',
        core: [
          {
            title: 'LU for systems',
            body: 'Fast repeated solves for square nonsingular matrices.'
          },
          {
            title: 'QR for stability',
            body: 'Orthogonal factors improve numerical behavior.'
          },
          {
            title: 'SVD for insight',
            body: 'Works for any matrix and reveals rank/energy directions.'
          }
        ],
        formulas: [
          {
            title: 'LU',
            body: 'A = LU'
          },
          {
            title: 'QR',
            body: 'A = QR with Q orthogonal'
          },
          {
            title: 'SVD',
            body: 'A = U Sigma V^T'
          }
        ],
        pitfalls: [
          {
            title: 'Using LU blindly',
            body: 'Pivoting may be required for stability.'
          },
          {
            title: 'Mixing eigen and singular values',
            body: 'Only equal in special cases.'
          },
          {
            title: 'Ignoring conditioning',
            body: 'Small singular values signal unstable inversion.'
          }
        ],
        checklist: [
          {
            title: '60s check',
            body: 'Can you choose factorization based on objective?'
          },
          {
            title: 'Mini example',
            body: 'Can you explain what Sigma diagonals mean physically?'
          },
          {
            title: 'Bridge sentence',
            body: '“Factorizations are tools, each with a specific job.”'
          }
        ],
        next: ['Least squares', 'Data & signals', 'Applications room']
      },
      {
        summary: 'Interpret least squares as projection when exact solutions are impossible.',
        core: [
          {
            title: 'Best-fit target',
            body: 'Find x minimizing ||Ax-b||.'
          },
          {
            title: 'Projection viewpoint',
            body: 'Ax is projection of b onto col(A).'
          },
          {
            title: 'Residual orthogonality',
            body: 'b-Ax is orthogonal to col(A).'
          }
        ],
        formulas: [
          {
            title: 'Normal equation',
            body: 'A^TAx = A^Tb'
          },
          {
            title: 'Residual condition',
            body: 'A^T(b-Ax_hat)=0'
          },
          {
            title: 'Pseudo-inverse view',
            body: 'x_hat = A^+ b'
          }
        ],
        pitfalls: [
          {
            title: 'Treating as exact solve',
            body: 'Least squares gives approximation, not exact Ax=b.'
          },
          {
            title: 'Bad scaling',
            body: 'Feature scales affect fit and conditioning.'
          },
          {
            title: 'Ignoring rank deficiency',
            body: 'Use SVD when A^TA is near singular.'
          }
        ],
        checklist: [
          {
            title: '60s check',
            body: 'Can you explain why residual is orthogonal?'
          },
          {
            title: 'Mini example',
            body: 'Can you fit a line to three points conceptually?'
          },
          {
            title: 'Bridge sentence',
            body: '“Least squares is geometry of closest approximation.”'
          }
        ],
        next: ['Data & signals', 'Applications room', 'Orthogonality']
      },
      {
        summary: 'Connect linear algebra to PCA, compression, denoising, and feature extraction.',
        core: [
          {
            title: 'PCA idea',
            body: 'Rotate data to principal directions of variance.'
          },
          {
            title: 'Low-rank approximation',
            body: 'Keep dominant singular values to preserve key structure.'
          },
          {
            title: 'Noise separation',
            body: 'Small components often correspond to noise.'
          }
        ],
        formulas: [
          {
            title: 'Covariance',
            body: 'C = (1/n) X^TX (after centering)'
          },
          {
            title: 'Principal directions',
            body: 'Eigenvectors of C'
          },
          {
            title: 'Rank-k approximation',
            body: 'A_k = U_k Sigma_k V_k^T'
          }
        ],
        pitfalls: [
          {
            title: 'Skipping centering',
            body: 'PCA without centering gives misleading directions.'
          },
          {
            title: 'Over-truncation',
            body: 'Too few components lose critical information.'
          },
          {
            title: 'Blind variance interpretation',
            body: 'High variance is not always task-relevant.'
          }
        ],
        checklist: [
          {
            title: '60s check',
            body: 'Can you explain PCA as coordinate rotation + truncation?'
          },
          {
            title: 'Mini example',
            body: 'Can you interpret first principal component direction?'
          },
          {
            title: 'Bridge sentence',
            body: '“SVD keeps the signal directions and drops weak modes.”'
          }
        ],
        next: ['Applications room', 'Eigenvalues & eigenvectors', 'Matrix factorizations']
      }
    ],
    recall: [
      {
        question: 'What is a basis in one sentence?',
        answer: 'A minimal set of vectors that spans the space and is linearly independent.'
      },
      {
        question: 'When is a linear system Ax=b consistent?',
        answer: 'When b lies in the column space of A (no contradictory row).' 
      },
      {
        question: 'What does the rank of A tell you?',
        answer: 'The dimension of the column space, and the number of pivots.'
      },
      {
        question: 'What does det(A) = 0 imply?',
        answer: 'The transformation collapses volume; A is not invertible.'
      },
      {
        question: 'Why are orthogonal bases convenient?',
        answer: 'Coordinates become independent and projections are easy.'
      },
      {
        question: 'What is an eigenvector?',
        answer: 'A nonzero vector whose direction is preserved by a linear map.'
      },
      {
        question: 'What does the SVD decompose?',
        answer: 'A matrix into rotations/reflections, scaling, and another rotation.'
      },
      {
        question: 'What is the geometric meaning of Ax?',
        answer: 'It is the linear transformation applied to vector x.'
      }
    ],
    formulas: [
      {
        title: 'Dot product',
        body: 'a · b = ||a|| ||b|| cos(θ), measures alignment.'
      },
      {
        title: 'Projection onto u',
        body: 'proj_u(v) = (v·u / u·u) u.'
      },
      {
        title: 'Eigen equation',
        body: 'A v = λ v, with v ≠ 0.'
      },
      {
        title: 'Orthogonal matrix',
        body: 'QᵀQ = I, so Q preserves lengths and angles.'
      },
      {
        title: 'Rank-nullity',
        body: 'rank(A) + nullity(A) = number of columns.'
      },
      {
        title: 'Least squares condition',
        body: 'Aᵀ(Ax) = Aᵀb, error is orthogonal to column space.'
      }
    ],
    connections: [
      'Row space ↔ Column space via transpose',
      'Eigenvectors explain repeated application of a map',
      'SVD generalizes eigen-decomposition for any matrix',
      'Orthogonality simplifies least squares',
      'Determinant encodes volume + orientation',
      'Rank links systems, spaces, and dimensions'
    ],
    steps: [
      {
        title: 'Warm recall (5 min)',
        body: 'Flip 3–5 cards and restate each idea in your own words.'
      },
      {
        title: 'Map the concept',
        body: 'Place the new topic inside the knowledge map: what depends on it?'
      },
      {
        title: 'Work one clean example',
        body: 'Use a tiny 2×2 or 3×3 example to see the geometry.'
      },
      {
        id: 'applications',
        title: 'Connect to applications',
        body: 'Name one real context: data, physics, graphics, or systems.',
        cta: 'Click to open the application room.'
      },
      {
        title: 'Write a summary',
        body: 'Create a two-sentence summary in English, add a Chinese note if helpful.'
      },
      {
        title: 'Mini self-check',
        body: 'Ask: what would break if one assumption changed?'
      }
    ],
    applications: {
      cases: [
        {
          tag: 'Transformations',
          title: 'Computer graphics',
          body: 'Matrices rotate, scale, and project; eigenvectors mark stable directions.'
        },
        {
          tag: 'SVD',
          title: 'Data compression',
          body: 'Singular values rank importance; truncate for low-rank approximation.'
        },
        {
          tag: 'Least squares',
          title: 'Machine learning',
          body: 'Linear regression minimizes squared error; normal equations show geometry.'
        },
        {
          tag: 'Orthogonality',
          title: 'Signal processing',
          body: 'Fourier bases separate frequencies; projections isolate components.'
        },
        {
          tag: 'Eigenvalues',
          title: 'Networks & graphs',
          body: 'Spectral methods reveal clusters and diffusion rates.'
        },
        {
          tag: 'Dynamics',
          title: 'Physics & systems',
          body: 'Eigenvalues describe stability modes; diagonalization simplifies evolution.'
        }
      ],
      bridge: [
        {
          title: 'Identify the objects',
          body: 'What are the vectors, matrices, or linear maps in this story?'
        },
        {
          title: 'Name the space',
          body: 'Are we in column space, row space, or a subspace?'
        },
        {
          title: 'Check invariants',
          body: 'What is preserved: length, angle, volume, rank?'
        },
        {
          title: 'Read columns as actions',
          body: 'Each column shows where a basis vector moves.'
        },
        {
          title: 'Translate to geometry',
          body: 'State the geometric meaning: rotation, projection, scaling.'
        }
      ],
      boosters: [
        {
          title: 'Draw a tiny example',
          body: 'Use a 2×2 or 3×3 matrix to see the shape change.'
        },
        {
          title: 'Dimension sanity check',
          body: 'Verify dimensions before interpreting any equation.'
        },
        {
          title: 'One-sentence summary',
          body: 'Explain the concept without symbols.'
        },
        {
          title: 'Compare cousins',
          body: 'Eigen vs singular values: when do they differ?'
        },
        {
          title: 'What if rank drops?',
          body: 'Predict what information is lost.'
        },
        {
          title: 'Link to a formula',
          body: 'Connect the idea to one formula you can recall.'
        }
      ],
      pitfalls: [
        {
          title: 'Mixing spaces',
          body: 'Row space and column space are different; track which you need.'
        },
        {
          title: 'Eigen vs singular confusion',
          body: 'Eigenvalues need square matrices; SVD works for any matrix.'
        },
        {
          title: 'Hidden assumptions',
          body: 'Invertibility, symmetry, or orthogonality must be stated.'
        },
        {
          title: 'Least squares as exact',
          body: 'It is a best-fit approximation, not a true solution.'
        },
        {
          title: 'Ignoring geometry',
          body: 'Always say what the transformation does visually.'
        }
      ],
      prompts: [
        {
          title: 'Bridge sentence',
          body: '“In this application, the matrix represents …”'
        },
        {
          title: 'Focus question',
          body: 'Which direction is amplified or compressed the most?'
        },
        {
          title: 'Invariant check',
          body: 'What stays unchanged after the transformation?'
        },
        {
          title: 'Data lens',
          body: 'If I keep only top k singular values, what remains?'
        }
      ]
    }
  },
  zh: {
    brand: '线性代数指南针',
    brand_sub: '学概念、做回忆、连接知识地图。',
    hero_title: '你的双语线性代数伙伴',
    hero_body:
      '通过知识点梳理、快速回忆和个人笔记来学习线性代数。',
    hero_cta: '随机今日回忆',
    daily_title: '今日回忆',
    map_title: '知识地图',
    map_body: '整理好的知识点列表。点击卡片可进入该主题的深度梳理页面。',
    recall_title: '快速回忆卡片',
    recall_body: '点击翻转。用于 60 秒内唤醒概念。',
    formula_title: '核心公式与定义',
    formula_body: '简短、实用的记忆锚点。',
    connections_title: '概念连接',
    connections_body: '看看哪些概念相互依赖，决定下一次复习。',
    plan_title: '学习节奏',
    plan_body: '每周可以重复的小流程。',
    notes_title: '我的线性代数笔记本',
    notes_body: '写下自己的总结或直觉图像，保存在浏览器里。',
    footer: '为安静、专注的学习而设计。可根据课程调整内容。',
    notes_placeholder: '在这里写笔记…',
    recall_tag: '回忆',
    tap_to_flip: '点击翻转',
    app_back: '返回学习节奏',
    app_eyebrow: '应用场景',
    app_title: '把概念连接到真实世界',
    app_body: '选择一个场景，读懂线代视角，然后写两句话的“连接桥”。这是记忆锚点，不是做题。',
    app_bridge_title: '连接清单',
    app_booster_title: '学习助推器',
    app_pitfall_title: '常见误区',
    app_prompt_title: '迷你提示',
    map_open: '进入深度梳理',
    topic_back: '返回知识地图',
    topic_eyebrow: '知识点深潜',
    topic_core_title: '核心概念',
    topic_formula_title: '关键公式',
    topic_pitfall_title: '常见误区',
    topic_checklist_title: '自检清单',
    topic_next_title: '下一步复习',
    topics: [
      {
        tag: '基础',
        title: '向量与几何',
        body: '模、方向、张成与点积所表达的角度关系。',
        focus: '回忆：点积在几何上衡量什么？'
      },
      {
        tag: '方程组',
        title: '线性方程组',
        body: '行变换、主元、何时有解。',
        focus: '回忆：主元列告诉你什么？'
      },
      {
        tag: '结构',
        title: '向量空间',
        body: '子空间、张成、基与维数。',
        focus: '回忆：基的两个条件是什么？'
      },
      {
        tag: '映射',
        title: '线性变换',
        body: '矩阵是保持线性组合的函数。',
        focus: '回忆：矩阵对基向量意味着什么？'
      },
      {
        tag: '行列式',
        title: '行列式',
        body: '体积缩放与可逆性的一句描述。',
        focus: '回忆：det(A)=0 在几何上意味着？'
      },
      {
        tag: '特征',
        title: '特征值与特征向量',
        body: '变换后方向不变的向量。',
        focus: '回忆：为什么特征向量在动力系统中重要？'
      },
      {
        tag: '正交',
        title: '正交与投影',
        body: '把向量分解为互相垂直的部分。',
        focus: '回忆：投影的几何意义是什么？'
      },
      {
        tag: '分解',
        title: '矩阵分解',
        body: 'LU、QR、SVD 提供计算与理解的视角。',
        focus: '回忆：SVD 能告诉你什么？'
      },
      {
        tag: '逼近',
        title: '最小二乘',
        body: '无精确解时的最佳拟合。',
        focus: '回忆：误差为何与列空间正交？'
      },
      {
        tag: '应用',
        title: '数据与信号',
        body: 'PCA、压缩与稳定性。',
        focus: '回忆：PCA 如何利用特征向量？'
      }
    ],
    topic_details: [
      {
        summary: '把向量同时看成几何对象与“基底下的坐标表示”。',
        core: [
          {
            title: '几何与坐标',
            body: '向量本身不变，坐标会随基变化。'
          },
          {
            title: '张成与线性组合',
            body: '张成空间决定了“你能到达哪些方向”。'
          },
          {
            title: '点积直觉',
            body: '点积体现方向对齐程度，也决定投影大小。'
          }
        ],
        formulas: [
          {
            title: '范数',
            body: '||v|| = sqrt(v · v)'
          },
          {
            title: '夹角',
            body: 'cos(theta) = (a · b) / (||a|| ||b||)'
          },
          {
            title: '投影',
            body: 'proj_u(v) = ((v · u) / (u · u)) u'
          }
        ],
        pitfalls: [
          {
            title: '向量与点混淆',
            body: '点是位置，向量是位移/方向。'
          },
          {
            title: '忘记基依赖',
            body: '坐标数字会变，不代表向量变了。'
          },
          {
            title: '单位不一致',
            body: '内积必须建立在同一空间和一致量纲下。'
          }
        ],
        checklist: [
          {
            title: '60 秒自检',
            body: '不写公式，能解释点积的几何意义吗？'
          },
          {
            title: '小例子',
            body: '只看点积，能判断两向量是否正交吗？'
          },
          {
            title: '连接句',
            body: '“换基只改变坐标，不改变向量对象本身。”'
          }
        ],
        next: ['线性方程组', '向量空间', '正交与投影']
      },
      {
        summary: '通过消元、主元和一致性条件理解 Ax=b 的解结构。',
        core: [
          {
            title: '主元结构',
            body: '主元列对应受约束变量，也决定秩。'
          },
          {
            title: '一致性',
            body: '当 b 在 A 的列空间内时方程组有解。'
          },
          {
            title: '解集形状',
            body: '自由变量会产生一族仿射解。'
          }
        ],
        formulas: [
          {
            title: '一致性判据',
            body: 'RREF 不能出现 [0 ... 0 | 非零] 行。'
          },
          {
            title: '通解',
            body: 'x = x_p + x_n，其中 x_n 来自 null(A)。'
          },
          {
            title: '秩',
            body: 'rank(A) = A 中主元个数。'
          }
        ],
        pitfalls: [
          {
            title: '行列含义混淆',
            body: '行变换保留解集，但不保留原列向量意义。'
          },
          {
            title: '有解不等于唯一',
            body: '一致性与唯一性是两个问题。'
          },
          {
            title: '忽略增广列',
            body: '消元时必须同时跟踪 b。'
          }
        ],
        checklist: [
          {
            title: '60 秒自检',
            body: '看到 RREF 能直接说出自由变量吗？'
          },
          {
            title: '小例子',
            body: '看到一行矛盾式能立刻判断无解吗？'
          },
          {
            title: '连接句',
            body: '“主元模式同时决定有解性与唯一性。”'
          }
        ],
        next: ['向量空间', '秩-零度定理', '最小二乘']
      },
      {
        summary: '用子空间、基和维数描述线代里的“结构”。',
        core: [
          {
            title: '子空间判定',
            body: '检查加法与数乘封闭。'
          },
          {
            title: '基的双条件',
            body: '既要线性无关，也要能张成。'
          },
          {
            title: '维数含义',
            body: '维数表示独立方向数量。'
          }
        ],
        formulas: [
          {
            title: '张成',
            body: 'span(v1,...,vk) = {a1 v1 + ... + ak vk}'
          },
          {
            title: '秩-零度',
            body: 'rank(A) + nullity(A) = 列数'
          },
          {
            title: '坐标映射',
            body: '[x]_B 表示 x 在基 B 下坐标。'
          }
        ],
        pitfalls: [
          {
            title: '只满足一半条件',
            body: '线性无关但不张成，或反过来，都不是基。'
          },
          {
            title: '跨空间比维数',
            body: '不同空间的维数不能直接混比。'
          },
          {
            title: '忽略母空间',
            body: '“子空间”一定是相对某个母空间。'
          }
        ],
        checklist: [
          {
            title: '60 秒自检',
            body: '不用符号，能口头定义“基”吗？'
          },
          {
            title: '小例子',
            body: '能去掉冗余向量而保持同一张成空间吗？'
          },
          {
            title: '连接句',
            body: '“维数就是空间可独立变化的自由度。”'
          }
        ],
        next: ['线性变换', '正交与投影', '特征值与特征向量']
      },
      {
        summary: '把矩阵当作线性函数：看它如何移动基向量。',
        core: [
          {
            title: '线性条件',
            body: 'T(ax + by) = aT(x) + bT(y)。'
          },
          {
            title: '列向量意义',
            body: 'A 的每列是标准基向量的像。'
          },
          {
            title: '复合对应乘法',
            body: '矩阵乘法就是线性映射复合。'
          }
        ],
        formulas: [
          {
            title: '标准矩阵',
            body: 'T(x) = Ax'
          },
          {
            title: '复合',
            body: '(S o T)(x) = S(T(x))，对应 BA'
          },
          {
            title: '核与像',
            body: 'ker(T)、im(T) 概括映射结构。'
          }
        ],
        pitfalls: [
          {
            title: '顺序写反',
            body: 'BA 表示先 A 后 B（按 x 的流向看）。'
          },
          {
            title: '把非线性当线性',
            body: '有偏移项通常就不再线性。'
          },
          {
            title: '只算不解释',
            body: '要说明它对直线/平面的几何作用。'
          }
        ],
        checklist: [
          {
            title: '60 秒自检',
            body: '能通过“基向量去哪了”解释一个矩阵吗？'
          },
          {
            title: '小例子',
            body: '能用列线性组合快速算出 Ax 吗？'
          },
          {
            title: '连接句',
            body: '“矩阵是带几何动作的函数表示。”'
          }
        ],
        next: ['行列式', '特征值与特征向量', '矩阵分解']
      },
      {
        summary: '把行列式理解为“体积缩放 + 方向翻转 + 可逆性”信号。',
        core: [
          {
            title: '体积缩放',
            body: '|det(A)| 给出面积/体积缩放倍数。'
          },
          {
            title: '方向信息',
            body: 'det 的符号反映是否发生方向翻转。'
          },
          {
            title: '可逆性连接',
            body: 'det(A)=0 意味着维度塌缩与不可逆。'
          }
        ],
        formulas: [
          {
            title: '乘法性',
            body: 'det(AB) = det(A)det(B)'
          },
          {
            title: '转置',
            body: 'det(A^T) = det(A)'
          },
          {
            title: '三角矩阵',
            body: 'det(A) = 对角线元素乘积'
          }
        ],
        pitfalls: [
          {
            title: '过度依赖行列式',
            body: '大规模求解不应把 det 当主工具。'
          },
          {
            title: '只看绝对值',
            body: '符号与大小各有不同信息。'
          },
          {
            title: '套用到非方阵',
            body: '行列式只定义在方阵上。'
          }
        ],
        checklist: [
          {
            title: '60 秒自检',
            body: '不用推导，能解释 det=0 的几何意义吗？'
          },
          {
            title: '小例子',
            body: '交换两行后，能判断 det 如何变化吗？'
          },
          {
            title: '连接句',
            body: '“行列式把几何压缩成一个标量。”'
          }
        ],
        next: ['特征值与特征向量', '最小二乘', '数据与信号']
      },
      {
        summary: '通过特征对理解变换的“自然方向”和“增长模式”。',
        core: [
          {
            title: '不变方向',
            body: '特征向量在变换后方向保持不变。'
          },
          {
            title: '缩放因子',
            body: '特征值描述沿该方向的伸缩。'
          },
          {
            title: '对角化价值',
            body: '若可对角化，A 的幂和动力分析更简单。'
          }
        ],
        formulas: [
          {
            title: '特征方程',
            body: 'Av = lambda v, v != 0'
          },
          {
            title: '特征多项式',
            body: 'det(A - lambda I) = 0'
          },
          {
            title: '对角化',
            body: 'A = PDP^{-1}（存在特征基时）'
          }
        ],
        pitfalls: [
          {
            title: '默认可对角化',
            body: '并非所有矩阵都有足够独立特征向量。'
          },
          {
            title: '重数混淆',
            body: '代数重数与几何重数可能不同。'
          },
          {
            title: '忽略复特征值',
            body: '实矩阵也可能出现复特征值。'
          }
        ],
        checklist: [
          {
            title: '60 秒自检',
            body: '能解释为什么 A^k x 会被特征结构主导吗？'
          },
          {
            title: '小例子',
            body: '根据特征值大小，能判断稳定/发散趋势吗？'
          },
          {
            title: '连接句',
            body: '“特征向量是变换最自然的坐标轴。”'
          }
        ],
        next: ['矩阵分解', '数据与信号', '应用场景']
      },
      {
        summary: '利用正交性简化投影、坐标表示和误差分析。',
        core: [
          {
            title: '正交分解',
            body: '向量可拆成互相垂直的分量。'
          },
          {
            title: '投影几何',
            body: '投影就是子空间中的最近点。'
          },
          {
            title: '正交归一基',
            body: '系数可直接由点积读取。'
          }
        ],
        formulas: [
          {
            title: '投影',
            body: 'proj_u(v) = ((v · u)/(u · u))u'
          },
          {
            title: '正交展开',
            body: 'v = sum((v · qi)qi)'
          },
          {
            title: '正交矩阵',
            body: 'Q^TQ = I'
          }
        ],
        pitfalls: [
          {
            title: '忘记归一化',
            body: '正交归一基要求向量长度为 1。'
          },
          {
            title: '投影目标错位',
            body: '要先明确是投影到子空间还是法向。'
          },
          {
            title: '忽略最近点解释',
            body: '投影本质是最短距离问题。'
          }
        ],
        checklist: [
          {
            title: '60 秒自检',
            body: '能用“最近点”解释投影吗？'
          },
          {
            title: '小例子',
            body: '能只用点积算一个投影吗？'
          },
          {
            title: '连接句',
            body: '“正交把几何问题变成了干净算术。”'
          }
        ],
        next: ['最小二乘', '矩阵分解', '数据与信号']
      },
      {
        summary: '根据任务选择 LU、QR、SVD 三种分解视角。',
        core: [
          {
            title: 'LU 用于求解',
            body: '适合方阵反复解线性系统。'
          },
          {
            title: 'QR 强调稳定',
            body: '正交因子可改善数值稳定性。'
          },
          {
            title: 'SVD 最通用',
            body: '适用于任意矩阵并揭示秩结构。'
          }
        ],
        formulas: [
          {
            title: 'LU',
            body: 'A = LU'
          },
          {
            title: 'QR',
            body: 'A = QR，Q 为正交矩阵'
          },
          {
            title: 'SVD',
            body: 'A = U Sigma V^T'
          }
        ],
        pitfalls: [
          {
            title: '盲目用 LU',
            body: '实际中常需要主元选取来稳定。'
          },
          {
            title: '特征值与奇异值混用',
            body: '两者只在特殊条件下才一致。'
          },
          {
            title: '忽略条件数',
            body: '很小的奇异值意味着逆问题不稳定。'
          }
        ],
        checklist: [
          {
            title: '60 秒自检',
            body: '能按目标选择分解方法吗？'
          },
          {
            title: '小例子',
            body: '能解释 Sigma 对角元的意义吗？'
          },
          {
            title: '连接句',
            body: '“分解是工具箱，不同工具服务不同任务。”'
          }
        ],
        next: ['最小二乘', '数据与信号', '应用场景']
      },
      {
        summary: '把最小二乘看成“把 b 投影到列空间”的问题。',
        core: [
          {
            title: '最佳拟合目标',
            body: '寻找使 ||Ax-b|| 最小的 x。'
          },
          {
            title: '投影视角',
            body: 'Ax 是 b 在 col(A) 上的投影。'
          },
          {
            title: '残差正交',
            body: 'b-Ax 与 col(A) 正交。'
          }
        ],
        formulas: [
          {
            title: '法方程',
            body: 'A^TAx = A^Tb'
          },
          {
            title: '残差条件',
            body: 'A^T(b-Ax_hat)=0'
          },
          {
            title: '伪逆表达',
            body: 'x_hat = A^+ b'
          }
        ],
        pitfalls: [
          {
            title: '当作精确解',
            body: '最小二乘是近似，不是严格解 Ax=b。'
          },
          {
            title: '尺度问题',
            body: '特征量纲不平衡会影响拟合与稳定性。'
          },
          {
            title: '忽略秩亏',
            body: 'A^TA 近奇异时应优先用 SVD。'
          }
        ],
        checklist: [
          {
            title: '60 秒自检',
            body: '能解释残差为什么必须正交吗？'
          },
          {
            title: '小例子',
            body: '能口头描述三点拟合直线的过程吗？'
          },
          {
            title: '连接句',
            body: '“最小二乘是最近逼近的几何问题。”'
          }
        ],
        next: ['数据与信号', '应用场景', '正交与投影']
      },
      {
        summary: '把线代连接到 PCA、压缩、去噪和特征提取。',
        core: [
          {
            title: 'PCA 本质',
            body: '把数据旋转到方差最大的主方向。'
          },
          {
            title: '低秩近似',
            body: '保留主要奇异值以压缩并保留结构。'
          },
          {
            title: '噪声分离',
            body: '较小分量常对应噪声或弱模式。'
          }
        ],
        formulas: [
          {
            title: '协方差',
            body: 'C = (1/n) X^TX（先中心化）'
          },
          {
            title: '主方向',
            body: 'C 的特征向量'
          },
          {
            title: '秩-k 近似',
            body: 'A_k = U_k Sigma_k V_k^T'
          }
        ],
        pitfalls: [
          {
            title: '不做中心化',
            body: '未中心化会让 PCA 方向偏移。'
          },
          {
            title: '截断过度',
            body: '保留维度过少会丢失关键信息。'
          },
          {
            title: '方差即价值',
            body: '高方差不一定等于任务最有用特征。'
          }
        ],
        checklist: [
          {
            title: '60 秒自检',
            body: '能把 PCA 解释成“旋转 + 截断”吗？'
          },
          {
            title: '小例子',
            body: '能说明第一主成分方向的意义吗？'
          },
          {
            title: '连接句',
            body: '“SVD 保留主要信号方向，弱方向可被压缩。”'
          }
        ],
        next: ['应用场景', '特征值与特征向量', '矩阵分解']
      }
    ],
    recall: [
      {
        question: '一句话描述什么是基？',
        answer: '最小的张成集合，且向量线性无关。'
      },
      {
        question: '什么时候 Ax=b 有解？',
        answer: '当 b 在 A 的列空间里（没有矛盾行）。'
      },
      {
        question: '秩告诉你什么？',
        answer: '列空间的维数，也等于主元数量。'
      },
      {
        question: 'det(A)=0 说明什么？',
        answer: '体积被压扁，矩阵不可逆。'
      },
      {
        question: '为什么正交基很方便？',
        answer: '坐标彼此独立，投影公式简单。'
      },
      {
        question: '什么是特征向量？',
        answer: '经过线性变换后方向不变的非零向量。'
      },
      {
        question: 'SVD 在做什么？',
        answer: '把矩阵分成旋转/反射 + 缩放 + 再旋转。'
      },
      {
        question: 'Ax 的几何意义？',
        answer: '线性变换作用在向量 x 上。'
      }
    ],
    formulas: [
      {
        title: '点积',
        body: 'a · b = ||a|| ||b|| cos(θ)，表示方向一致程度。'
      },
      {
        title: '投影到 u',
        body: 'proj_u(v) = (v·u / u·u) u。'
      },
      {
        title: '特征方程',
        body: 'A v = λ v，v ≠ 0。'
      },
      {
        title: '正交矩阵',
        body: 'QᵀQ = I，保持长度与角度。'
      },
      {
        title: '秩-零度定理',
        body: 'rank(A) + nullity(A) = 列数。'
      },
      {
        title: '最小二乘条件',
        body: 'Aᵀ(Ax) = Aᵀb，误差与列空间正交。'
      }
    ],
    connections: [
      '行空间 ↔ 列空间（转置连接）',
      '特征向量解释重复变换的行为',
      'SVD 将特征分解推广到任意矩阵',
      '正交让最小二乘更清晰',
      '行列式体现体积与方向',
      '秩连接方程组、空间与维数'
    ],
    steps: [
      {
        title: '热身回忆（5 分钟）',
        body: '翻 3–5 张卡片，用自己的话复述。'
      },
      {
        title: '定位概念',
        body: '把新概念放进知识地图：依赖哪些内容？'
      },
      {
        title: '做一个小例子',
        body: '用 2×2 或 3×3 例子理解几何意义。'
      },
      {
        id: 'applications',
        title: '连接应用',
        body: '说出一个实际场景：数据、物理、图形或系统。',
        cta: '点击进入应用场景。'
      },
      {
        title: '写总结',
        body: '用英文写两句话，再补充中文提示。'
      },
      {
        title: '小自检',
        body: '想想：若一个假设改变，会发生什么？'
      }
    ],
    applications: {
      cases: [
        {
          tag: '变换',
          title: '计算机图形',
          body: '矩阵做旋转、缩放、投影；特征向量是稳定方向。'
        },
        {
          tag: 'SVD',
          title: '数据压缩',
          body: '奇异值衡量重要性，截断得到低秩近似。'
        },
        {
          tag: '最小二乘',
          title: '机器学习',
          body: '线性回归最小化平方误差，法方程体现几何。'
        },
        {
          tag: '正交',
          title: '信号处理',
          body: '傅里叶基分离频率，投影隔离成分。'
        },
        {
          tag: '特征值',
          title: '网络与图',
          body: '谱方法发现聚类与扩散速度。'
        },
        {
          tag: '动力学',
          title: '物理与系统',
          body: '特征值描述稳定模式，对角化简化演化。'
        }
      ],
      bridge: [
        {
          title: '识别对象',
          body: '这里的向量、矩阵或线性映射是什么？'
        },
        {
          title: '命名空间',
          body: '是在列空间、行空间还是子空间？'
        },
        {
          title: '看不变量',
          body: '保持什么：长度、角度、体积、秩？'
        },
        {
          title: '列向量动作',
          body: '每一列代表基向量被映射到哪里。'
        },
        {
          title: '几何翻译',
          body: '用“旋转/投影/缩放”等词描述。'
        }
      ],
      boosters: [
        {
          title: '画一个小例子',
          body: '用 2×2 或 3×3 观察形状变化。'
        },
        {
          title: '维度检查',
          body: '先检查维度再解释公式。'
        },
        {
          title: '一句话总结',
          body: '不用符号也能说明白。'
        },
        {
          title: '对比近亲',
          body: '特征值 vs 奇异值，何时不同？'
        },
        {
          title: '秩下降会怎样',
          body: '预测丢失的信息。'
        },
        {
          title: '绑定公式',
          body: '把概念对应到一个公式。'
        }
      ],
      pitfalls: [
        {
          title: '空间混淆',
          body: '行空间和列空间不同；明确你需要哪一个。'
        },
        {
          title: '特征/奇异混淆',
          body: '特征值要求方阵，SVD 适用于任意矩阵。'
        },
        {
          title: '假设缺失',
          body: '可逆、对称、正交等条件必须说明。'
        },
        {
          title: '最小二乘当作精确解',
          body: '它是最佳拟合，不是真解。'
        },
        {
          title: '忽略几何',
          body: '总要说清变换的视觉意义。'
        }
      ],
      prompts: [
        {
          title: '连接句',
          body: '“在这个应用里，矩阵表示……”'
        },
        {
          title: '聚焦问题',
          body: '哪个方向被放大或压缩得最多？'
        },
        {
          title: '不变量',
          body: '变换后什么保持不变？'
        },
        {
          title: '数据视角',
          body: '只保留前 k 个奇异值后还剩下什么？'
        }
      ]
    }
  }
};

const state = {
  lang: localStorage.getItem('lang') || 'en',
  currentTopicIndex: null
};

const els = {
  topicGrid: document.getElementById('topic-grid'),
  recallGrid: document.getElementById('recall-grid'),
  formulaList: document.getElementById('formula-list'),
  connections: document.getElementById('connections'),
  studySteps: document.getElementById('study-steps'),
  dailyQuestion: document.getElementById('daily-question'),
  dailyAnswer: document.getElementById('daily-answer'),
  notes: document.getElementById('notes'),
  shuffle: document.getElementById('shuffle-review'),
  appView: document.getElementById('applications-view'),
  appBack: document.getElementById('app-back'),
  appCases: document.getElementById('app-cases'),
  appBridge: document.getElementById('app-bridge'),
  appBoosters: document.getElementById('app-boosters'),
  appPitfalls: document.getElementById('app-pitfalls'),
  appPrompts: document.getElementById('app-prompts'),
  topicView: document.getElementById('topic-view'),
  topicBack: document.getElementById('topic-back'),
  topicTitle: document.getElementById('topic-title'),
  topicSummary: document.getElementById('topic-summary'),
  topicFocus: document.getElementById('topic-focus'),
  topicCore: document.getElementById('topic-core'),
  topicFormulas: document.getElementById('topic-formulas'),
  topicPitfalls: document.getElementById('topic-pitfalls'),
  topicChecklist: document.getElementById('topic-checklist'),
  topicNext: document.getElementById('topic-next')
};

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    node.textContent = i18n[lang][key];
  });
  els.notes.placeholder = i18n[lang].notes_placeholder;
  renderSections();
  if (document.body.classList.contains('topic-open') && state.currentTopicIndex !== null) {
    renderTopicDetail(state.currentTopicIndex);
  }
  setActiveToggle();
}

function setActiveToggle() {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === state.lang);
  });
}

function renderSections() {
  const content = i18n[state.lang];

  els.topicGrid.innerHTML = '';
  content.topics.forEach((topic, idx) => {
    const card = document.createElement('div');
    card.className = 'card reveal map-card';
    card.setAttribute('role', 'button');
    card.tabIndex = 0;
    card.style.animationDelay = `${idx * 60}ms`;
    card.innerHTML = `
      <div class="card-tag">${topic.tag}</div>
      <div class="card-title">${topic.title}</div>
      <div class="card-body">${topic.body}</div>
      <div class="card-body" style="margin-top:12px; color: var(--sea);">${topic.focus}</div>
      <div class="card-cta">${content.map_open}</div>
    `;
    card.addEventListener('click', () => openTopic(idx));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openTopic(idx);
      }
    });
    els.topicGrid.appendChild(card);
  });

  els.recallGrid.innerHTML = '';
  content.recall.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'card flip-card reveal';
    card.style.animationDelay = `${idx * 60}ms`;
    card.innerHTML = `
      <div class="card-tag">${content.recall_tag}</div>
      <div class="card-question">${item.question}</div>
      <div class="card-answer">${item.answer}</div>
      <div class="card-body">${content.tap_to_flip}</div>
    `;
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
    els.recallGrid.appendChild(card);
  });

  els.formulaList.innerHTML = '';
  content.formulas.forEach((formula, idx) => {
    const item = document.createElement('div');
    item.className = 'list-item reveal';
    item.style.animationDelay = `${idx * 60}ms`;
    item.innerHTML = `
      <div class="list-title">${formula.title}</div>
      <div class="list-body">${formula.body}</div>
    `;
    els.formulaList.appendChild(item);
  });

  els.connections.innerHTML = '';
  content.connections.forEach((text, idx) => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.style.animationDelay = `${idx * 40}ms`;
    chip.textContent = text;
    els.connections.appendChild(chip);
  });

  els.studySteps.innerHTML = '';
  content.steps.forEach((step, idx) => {
    const item = document.createElement('div');
    const isAppStep = step.id === 'applications';
    item.className = `step reveal${isAppStep ? ' clickable' : ''}`;
    item.style.animationDelay = `${idx * 60}ms`;
    if (step.id) {
      item.dataset.step = step.id;
    }
    item.innerHTML = `
      <div class="step-title">${step.title}</div>
      <div class="step-body">${step.body}</div>
      ${step.cta ? `<div class="step-cta">${step.cta}</div>` : ''}
    `;
    if (isAppStep) {
      item.addEventListener('click', openApplications);
    }
    els.studySteps.appendChild(item);
  });

  renderApplications();
  shuffleDaily();
}

function renderList(target, items) {
  target.innerHTML = '';
  items.forEach((item, idx) => {
    const node = document.createElement('div');
    node.className = 'list-item reveal';
    node.style.animationDelay = `${idx * 60}ms`;
    node.innerHTML = `
      <div class="list-title">${item.title}</div>
      <div class="list-body">${item.body}</div>
    `;
    target.appendChild(node);
  });
}

function renderChipList(target, items) {
  target.innerHTML = '';
  items.forEach((item, idx) => {
    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.style.animationDelay = `${idx * 40}ms`;
    chip.textContent = item;
    target.appendChild(chip);
  });
}

function renderTopicDetail(topicIndex) {
  const content = i18n[state.lang];
  const topic = content.topics[topicIndex];
  const detail = content.topic_details[topicIndex];
  if (!topic || !detail) return;

  els.topicTitle.textContent = topic.title;
  els.topicSummary.textContent = detail.summary;
  els.topicFocus.textContent = topic.focus;
  renderList(els.topicCore, detail.core);
  renderList(els.topicFormulas, detail.formulas);
  renderList(els.topicPitfalls, detail.pitfalls);
  renderList(els.topicChecklist, detail.checklist);
  renderChipList(els.topicNext, detail.next);
}

function renderApplications() {
  const content = i18n[state.lang];
  const data = content.applications;
  if (!data) return;

  els.appCases.innerHTML = '';
  data.cases.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'app-card reveal';
    card.style.animationDelay = `${idx * 60}ms`;
    card.innerHTML = `
      <div class="card-tag">${item.tag}</div>
      <div class="card-title">${item.title}</div>
      <div class="card-body">${item.body}</div>
    `;
    els.appCases.appendChild(card);
  });

  renderList(els.appBridge, data.bridge);
  renderList(els.appBoosters, data.boosters);
  renderList(els.appPitfalls, data.pitfalls);

  els.appPrompts.innerHTML = '';
  data.prompts.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'app-card reveal';
    card.style.animationDelay = `${idx * 60}ms`;
    card.innerHTML = `
      <div class="card-title">${item.title}</div>
      <div class="card-body">${item.body}</div>
    `;
    els.appPrompts.appendChild(card);
  });
}

function openApplications() {
  closeTopic();
  document.body.classList.add('app-open');
  els.appView.setAttribute('aria-hidden', 'false');
  renderApplications();
}

function closeApplications() {
  document.body.classList.remove('app-open');
  els.appView.setAttribute('aria-hidden', 'true');
}

function openTopic(topicIndex) {
  closeApplications();
  state.currentTopicIndex = topicIndex;
  renderTopicDetail(topicIndex);
  document.body.classList.add('topic-open');
  els.topicView.setAttribute('aria-hidden', 'false');
}

function closeTopic() {
  document.body.classList.remove('topic-open');
  els.topicView.setAttribute('aria-hidden', 'true');
}

function shuffleDaily() {
  const content = i18n[state.lang];
  const pick = content.recall[Math.floor(Math.random() * content.recall.length)];
  els.dailyQuestion.textContent = pick.question;
  els.dailyAnswer.textContent = pick.answer;
}

els.shuffle.addEventListener('click', shuffleDaily);
els.appBack.addEventListener('click', closeApplications);
els.topicBack.addEventListener('click', closeTopic);

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (document.body.classList.contains('topic-open')) {
    closeTopic();
    return;
  }
  if (document.body.classList.contains('app-open')) {
    closeApplications();
  }
});

els.notes.value = localStorage.getItem('la_notes') || '';
els.notes.addEventListener('input', (event) => {
  localStorage.setItem('la_notes', event.target.value);
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  setLanguage(state.lang);
});
