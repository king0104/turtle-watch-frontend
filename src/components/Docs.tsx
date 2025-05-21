import React from 'react';
import TableOfContents from './TableOfContents';

const Docs: React.FC = () => {
  const gradleCode = `dependencies {
    implementation 'io.github.turtle-watch:turtle-watch:1.0.0'
}`;

  const ymlCode = `turtle-watch:
  enabled: true
  threshold-ms: 500  # 500ms 이상 걸리는 쿼리를 슬로우 쿼리로 감지
  log-level: WARN
  show-stack-trace: true
  analyze-execution-plan: true`;

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
      <div className="flex gap-8">
        <div className="hidden lg:block">
          <TableOfContents onSectionClick={handleSectionClick} />
        </div>
        <div className="flex-1">
          {/* Getting Started */}
          <section id="getting-started" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">시작하기</h2>
            <p className="text-lg text-gray-600 mb-8">
              Turtle Watch는 데이터베이스 쿼리의 실행 계획을 자동으로 분석하고 성능 문제를 진단하는 Java 라이브러리입니다.
            </p>
            {/* Installation */}
            <div id="installation" className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">설치</h3>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Gradle</h4>
                <p className="text-gray-600 mb-4">build.gradle 파일에 다음 의존성을 추가하세요:</p>
                <pre className="bg-gray-800 text-gray-100 rounded-lg p-4 overflow-x-auto"><code>{gradleCode}</code></pre>
              </div>
            </div>
            {/* Configuration */}
            <div id="configuration">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">설정</h3>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-gray-600 mb-4">application.yml 파일에 다음 설정을 추가하세요:</p>
                <pre className="bg-gray-800 text-gray-100 rounded-lg p-4 overflow-x-auto"><code>{ymlCode}</code></pre>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900">enabled</h4>
                    <p className="text-sm text-gray-600">라이브러리 활성화 여부</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900">threshold-ms</h4>
                    <p className="text-sm text-gray-600">슬로우 쿼리로 감지할 실행 시간 임계값 (밀리초)</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900">log-level</h4>
                    <p className="text-sm text-gray-600">로그 레벨 (DEBUG, INFO, WARN, ERROR)</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900">show-stack-trace</h4>
                    <p className="text-sm text-gray-600">스택 트레이스 출력 여부</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900">analyze-execution-plan</h4>
                    <p className="text-sm text-gray-600">실행 계획 분석 활성화 여부</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Features */}
          <section id="features" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">주요 기능</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">슬로우 쿼리 탐지</h3>
                <p className="text-gray-600">설정된 임계값을 초과하는 쿼리를 자동으로 감지하고 로깅합니다.</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">실행 계획 분석</h3>
                <p className="text-gray-600">쿼리의 실행 계획을 자동으로 분석하여 성능 문제를 진단합니다.</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">성능 규칙 검사</h3>
                <p className="text-gray-600">6가지 성능 규칙을 통해 쿼리의 문제점을 자동으로 진단합니다.</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">스택 트레이스 분석</h3>
                <p className="text-gray-600">문제가 발생한 코드의 위치를 정확히 파악할 수 있습니다.</p>
              </div>
            </div>
          </section>
          {/* Analysis Rules */}
          <section id="analysis-rules">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">실행 계획 분석 규칙</h2>
            <div className="space-y-6">
              <div id="full-table-scan" className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Full Table Scan (type: ALL)</h3>
                <p className="text-gray-600 mb-4">전체 테이블 스캔은 테이블의 모든 행을 검색하므로 데이터가 많을수록 성능이 크게 저하됩니다.</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">해결 방안:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li className="text-gray-600">WHERE 절에 인덱스 추가</li>
                    <li className="text-gray-600">복합 인덱스 고려</li>
                    <li className="text-gray-600">쿼리 최적화</li>
                    <li className="text-gray-600">EXPLAIN 분석</li>
                    <li className="text-gray-600">파티셔닝 고려</li>
                  </ul>
                </div>
              </div>
              <div id="full-index-scan" className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Full Index Scan (type: index)</h3>
                <p className="text-gray-600 mb-4">전체 인덱스 스캔은 전체 테이블 스캔보다는 빠르지만, 여전히 많은 데이터를 읽어야 합니다.</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">해결 방안:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li className="text-gray-600">인덱스 재검토</li>
                    <li className="text-gray-600">커버링 인덱스 구현</li>
                    <li className="text-gray-600">범위 조건 추가</li>
                    <li className="text-gray-600">인덱스 컬럼 순서 최적화</li>
                    <li className="text-gray-600">LIMIT 추가</li>
                  </ul>
                </div>
              </div>
              <div id="no-index-used" className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. 인덱스 사용 안 함 (key: NULL)</h3>
                <p className="text-gray-600 mb-4">옵티마이저가 인덱스를 사용하지 않기로 결정했을 때 발생합니다.</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">해결 방안:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li className="text-gray-600">데이터 분포 확인</li>
                    <li className="text-gray-600">FORCE INDEX 힌트 고려</li>
                    <li className="text-gray-600">쿼리 재작성</li>
                    <li className="text-gray-600">통계 업데이트</li>
                    <li className="text-gray-600">인덱스 선택성 확인</li>
                  </ul>
                </div>
              </div>
              <div id="using-filesort" className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Using filesort</h3>
                <p className="text-gray-600 mb-4">추가적인 정렬 작업이 필요할 때 발생합니다.</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">해결 방안:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li className="text-gray-600">ORDER BY 컬럼에 인덱스 추가</li>
                    <li className="text-gray-600">복합 인덱스 순서 최적화</li>
                    <li className="text-gray-600">정렬 방향 일치</li>
                    <li className="text-gray-600">정렬 버퍼 크기 검토</li>
                    <li className="text-gray-600">결과 세트 줄이기</li>
                  </ul>
                </div>
              </div>
              <div id="using-temporary" className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">5. Using temporary</h3>
                <p className="text-gray-600 mb-4">임시 테이블 생성은 메모리 사용을 증가시키고 성능을 저하시킵니다.</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">해결 방안:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li className="text-gray-600">GROUP BY/ORDER BY 컬럼에 인덱스 추가</li>
                    <li className="text-gray-600">GROUP BY와 ORDER BY 컬럼 순서 일치</li>
                    <li className="text-gray-600">서브쿼리나 조인 최적화</li>
                    <li className="text-gray-600">임시 테이블 관련 설정 최적화</li>
                    <li className="text-gray-600">DISTINCT 대신 EXISTS 사용 고려</li>
                  </ul>
                </div>
              </div>
              <div id="many-records-scanned" className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">6. 많은 레코드 스캔 & 낮은 필터링 비율</h3>
                <p className="text-gray-600 mb-4">많은 레코드를 스캔하지만 실제로는 적은 수의 레코드만 반환될 때 발생합니다.</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">해결 방안:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li className="text-gray-600">복합 인덱스 최적화</li>
                    <li className="text-gray-600">인덱스 컬럼 순서 재고려</li>
                    <li className="text-gray-600">인덱스 힌트 사용</li>
                    <li className="text-gray-600">쿼리 재구성</li>
                    <li className="text-gray-600">파티셔닝 전략 검토</li>
                    <li className="text-gray-600">서브쿼리나 조인 최적화</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Docs; 